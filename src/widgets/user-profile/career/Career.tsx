import * as S from "./style";
import { useUserDetailStore } from "../../../pages/profile/store/user-detail-store";
import { useChangeDateForm as changeDateForm } from "./util/useChangeDateForm";

const Career = () => {
  const { userDetail } = useUserDetailStore();
  console.log(userDetail);
  if (!userDetail) return;
  console.log("run");
  const specList = userDetail.specs?.map((spec) => {
    return (
      <S.Box key={`user_spec_${spec.title}`} className="column gap_4">
        <S.SpecTitle>{spec.title}</S.SpecTitle>
        <S.SpecPeriod>{changeDateForm(spec.startDate)}</S.SpecPeriod>
        <S.SpecDescription>{spec.description}</S.SpecDescription>
      </S.Box>
    );
  });

  return (
    <S.Container>
      <S.Box className="align_items gap_8">
        <S.Title>경력 및 수상 사항</S.Title>
        <S.Divider />
      </S.Box>
      <S.Box className="column gap_24">{specList}</S.Box>
    </S.Container>
  );
};

export default Career;
