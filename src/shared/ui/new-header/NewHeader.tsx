import * as S from "./style";
import { useNotificationStore } from "../../store/alarm-store";
import { useEffect, useState } from "react";
import AlarmModal from "../alarm-modal/AlarmModal";
import { useGetMyData } from "../../api/useGetMyData";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";

interface headerProps {
  logo?: boolean;
  isBackBtn?: boolean;
  onClickBack?: () => void;
  title?: string;
  isLoginBtn?: boolean;
  isAlarmBtn?: boolean;
}

const NewHeader = (props: headerProps) => {
  const navigate = useNavigate();
  const { data: myData } = useGetMyData();
  const accessToken = Cookies.get("access_token");

  const { hasNewNotification, markAsRead } = useNotificationStore();

  const [alarmOpen, setAlarmOpen] = useState<boolean>(false);
  const [logoutAlert, setLogoutAlert] = useState<boolean>(false);

  const closeModal = () => {
    markAsRead();
    setAlarmOpen(false);
  };

  const logoutConfirm = () => {
    Cookies.remove("access_token");
    Cookies.remove("email");
    Cookies.remove("is_new_member");
    Cookies.remove("refresh_token");
    Cookies.remove("name");
    navigate("/login");
  };

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
        ) : myData?.memberId && accessToken ? (
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
