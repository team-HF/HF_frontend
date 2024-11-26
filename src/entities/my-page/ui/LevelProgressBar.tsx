import * as S from './level-progress-bar';

type LevelProgressBarProps = {
  currentLevel: number;
};

export default function LevelProgressBar({
  currentLevel,
}: LevelProgressBarProps) {
  const levels = [1, 2, 3, 4, 5];
  const remainingMatches = Math.max(levels.length - currentLevel, 0);
  const NextLevelMessage = `다음 레벨까지 ${remainingMatches}회의 매칭이 남았어요!`;

  return (
    <S.Container>
      <S.LevelProgressAndMessageWrapper>
        <S.LevelWrapper>
          {levels.map((level) => (
            <S.Level key={level} isActive={level <= currentLevel}>
              Lv. {level}
            </S.Level>
          ))}
        </S.LevelWrapper>
        <S.StyledMessage>{NextLevelMessage}</S.StyledMessage>
      </S.LevelProgressAndMessageWrapper>
    </S.Container>
  );
}
