import { useParams } from 'react-router-dom';
import PartnerInfo from '../../entities/matching/ui/PartnerInfo';
import MatchingButton from '../../features/matching/ui/MatchingButton';
import ScheduleForm from '../../features/matching/ui/ScheduleForm';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';

export default function Matching() {
  const { id } = useParams();
  const matchingUserId = parseInt(id!, 10);
  return (
    <S.Container>
      <BackHeader text="매칭 신청" style={{ padding: '0px' }} />
      <PartnerInfo matchingUserId={matchingUserId} />
      <S.DetailDiv>상세 일정</S.DetailDiv>
      <ScheduleForm />
      <S.BottomWrapper>
        <MatchingButton />
      </S.BottomWrapper>
    </S.Container>
  );
}
