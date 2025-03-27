import * as S from "./style";
import { useNotificationStore } from "../../store/alarm-store";
import { useEffect, useState } from "react";
import AlarmModal from "../alarm-modal/AlarmModal";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";
import { useGetMyData as getMyData } from "../../api/useGetMyData";
import { useDeleteRefreshToken as deleteRefreshToken } from "../../api/useDeleteRefreshToken";

interface headerProps {
  logo?: boolean;
  isBackBtn?: boolean;
  onClickBack?: () => void;
  title?: string;
  isLoginBtn?: boolean;
  isAlarmBtn?: boolean;
}

const NewHeader = (props: headerProps) => {
  const { data: myData } = getMyData();
  const navigate = useNavigate();
  const doneJoinMembership = Cookies.get("is_new_member");
  const accessToken = Cookies.get("access_token");

  const { hasNewNotification, addNewNotification, markAsRead } =
    useNotificationStore();

  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);
  const [logoutAlert, setLogoutAlert] = useState<boolean>(false);

  const closeModal = () => {
    markAsRead();
    setAlarmOpen(false);
  };

  const logoutConfirm = async () => {
    await deleteRefreshToken();
    navigate("/login");
  };

  useEffect(() => {
    if (!myData || !myData.memberId) return;
    const eventSource = new EventSource(
      `${import.meta.env.VITE_BASE_URL}/hf/connect/sse?memberId=${
        myData.memberId
      }`,
      { withCredentials: true }
    );

    const handleAlarmEvent = (event: MessageEvent) => {
      try {
        const trimmedData = event.data.trim();
        if (trimmedData.startsWith("{") && trimmedData.endsWith("}")) {
          addNewNotification();
        }
      } catch (error) {
        console.error("Failed to parse event data:", error, event.data);
      }
    };

    eventSource.addEventListener("alarm", handleAlarmEvent);

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.removeEventListener("alarm", handleAlarmEvent);
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    if (alarmOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [alarmOpen]);
  console.log(!doneJoinMembership && accessToken);
  return (
    <S.Container>
      <S.Box className="align_center gap_8">
        {props.isBackBtn && (
          <S.IconBtn onClick={props.onClickBack}>
            <S.BackIcon src={"/svg/arrow-up-icon.svg"} />
          </S.IconBtn>
        )}
        {props.logo && <img src="/svg/logo.svg" />}
        {props.title && <S.Title>{props.title}</S.Title>}
      </S.Box>
      <S.Box className="align_center gap_8">
        {!props.isLoginBtn ? (
          <></>
        ) : doneJoinMembership === "false" && accessToken ? (
          <S.membershipBtn
            className="logout"
            onClick={() => setLogoutAlert(true)}
          >
            로그아웃
          </S.membershipBtn>
        ) : (
          <S.membershipBtn onClick={() => navigate("/login")}>
            로그인
          </S.membershipBtn>
        )}
        {props.isAlarmBtn && (
          <S.IconBtn onClick={() => setAlarmOpen(true)}>
            <img
              src={
                hasNewNotification
                  ? "/svg/bell-alarm-icon.svg"
                  : "/svg/alarm-icon.svg"
              }
            />
          </S.IconBtn>
        )}
      </S.Box>
      {alarmOpen && <AlarmModal closeModal={closeModal} />}
      {logoutAlert && (
        <Alert
          title="로그아웃"
          content={[
            "로그아웃 하시겠습니까?",
            "로그인 화면으로 돌아가게 됩니다.",
          ]}
          cancelBtn={true}
          confirm={() => logoutConfirm()}
          cancel={() => setLogoutAlert(false)}
        />
      )}
    </S.Container>
  );
};

export default NewHeader;
