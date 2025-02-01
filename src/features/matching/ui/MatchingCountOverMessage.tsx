import * as S from './matching-count-over-message.style';
import MatchingErrorButton from './MatchingErrorButton';

export default function MatchingCountOverMessage() {
  return (
    <S.Container>
      <S.UpperText>1일 1회만 매칭 신청을 할 수 있습니다.</S.UpperText>
      <S.UnderText>내일 다시 신청해주세요.</S.UnderText>
      <S.BUttonWrapper>
        <MatchingErrorButton />
      </S.BUttonWrapper>
    </S.Container>
  );
}
