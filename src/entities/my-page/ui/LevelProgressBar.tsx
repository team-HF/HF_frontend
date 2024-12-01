import * as S from './level-progress-bar';
import { useGetMyData } from '../../../shared/api/useGetMyData';

export default function LevelProgressBar() {
  const { data: myData } = useGetMyData();

  if (!myData?.tier?.tier) {
    return <p>레벨 정보를 불러올 수 없습니다.</p>;
  }

  const tier = myData?.tier.tier;
  const levels = [1, 2, 3, 4, 5];
  const remainingMatches = Math.max(levels.length - tier!, 0);
  const NextLevelMessage = `다음 레벨까지 ${remainingMatches}회의 매칭이 남았어요!`;

  return (
    <S.Container>
      <S.LevelProgressAndMessageWrapper>
        <S.LevelWrapper>
          {levels.map((level) => (
            <S.Level key={level} $isActive={level <= tier}>
              Lv. {level}
            </S.Level>
          ))}
        </S.LevelWrapper>
        <S.StyledMessage>{NextLevelMessage}</S.StyledMessage>
      </S.LevelProgressAndMessageWrapper>
    </S.Container>
  );
}
