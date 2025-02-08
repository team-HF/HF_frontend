import * as S from "./style";
import LogoHeader from "../../shared/ui/logo-header/Header";
import Career from "../../widgets/user-profile/career/Career";
import PageForm from "../../shared/ui/page-form/PageForm";
import UserDataDefault from "../../widgets/user-profile/user-data-default/UserDataDefault";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useUserDetailStore } from "../profile/store/user-detail-store";
import { useUserProfileStore } from "../../shared/store/user-profile-store";
import { useGetUserData as getUserData } from "../../shared/api/useGetUserData";
import { useGetUserDetail as getUserDetail } from "./api/useGetUserDetail";
import Review from "../../widgets/user-profile/review/Review";

const UserProfile = () => {
  const { id } = useParams();
  const memberId = Number(id);

  const { setUserProfile } = useUserProfileStore();
  const { setUserDetail, userDetail } = useUserDetailStore();

  useEffect(() => {
    (async () => {
      const userData_1 = await getUserData(memberId);
      setUserProfile(userData_1);
      const userData_2 = await getUserDetail(memberId);
      console.log(userData_1);
      if (userData_2) setUserDetail(userData_2);
    })();
  }, []);

  return (
    <PageForm isGNB={true}>
      <S.Container>
        <LogoHeader backBtn={true} />
        <UserDataDefault />
        {userDetail && userDetail.specs[0] && <Career />}
        <Review />
      </S.Container>
    </PageForm>
  );
};

export default UserProfile;
