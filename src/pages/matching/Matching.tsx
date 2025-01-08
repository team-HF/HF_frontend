import PartnerInfo from '../../entities/matching/ui/PartnerInfo';
import ScheduleForm from '../../features/matching/ui/ScheduleForm';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';

export default function Matching() {
  return (
    <S.Container>
      <BackHeader text="매칭 신청" />
      <PartnerInfo />
      <S.DetailDiv>상세 일정</S.DetailDiv>
      <ScheduleForm />
    </S.Container>
  );
}
