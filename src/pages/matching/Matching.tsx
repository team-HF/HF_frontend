import PartnerInfo from '../../entities/matching/ui/PartnerInfo';
import MatchingButton from '../../features/matching/ui/MatchingButton';
import ScheduleForm from '../../features/matching/ui/ScheduleForm';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';

export default function Matching() {
  return (
    <S.Container>
      <BackHeader text="매칭 신청" style={{ padding: '0px' }} />
      <PartnerInfo />
      <S.DetailDiv>상세 일정</S.DetailDiv>
      <ScheduleForm />
      <S.BottomWrapper>
        <MatchingButton />
      </S.BottomWrapper>
    </S.Container>
  );
}
