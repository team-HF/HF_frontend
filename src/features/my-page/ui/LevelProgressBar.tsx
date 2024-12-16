import * as S from './level-progress-bar';

type LevelProgressBarProps = {
  myData?: {
    tier: {
      fitnessLevel: string;
      tier: number;
    };
  };
};

export default function LevelProgressBar({ myData }: LevelProgressBarProps) {
  if (!myData || !myData.tier) {
    return (
      <S.Container>
        <p>레벨 정보를 불러올 수 없습니다.</p>
      </S.Container>
    );
  }

  const { tier } = myData;
  const levels = [1, 2, 3, 4, 5];
  const remainingMatches = Math.max(levels.length - tier.tier, 0);
  const NextLevelMessage = `다음 레벨까지 ${remainingMatches}회의 매칭이 남았습니다!`;

  return (
    <S.Container>
      <S.LevelProgressAndMessageWrapper>
        <S.LevelWrapper>
          {levels.map((level) => (
            <S.Level
              key={level}
              $isActive={level <= tier.tier}
              $fitnessLevel={tier.fitnessLevel}
            />
          ))}
        </S.LevelWrapper>
        <S.StyledMessage>{NextLevelMessage}</S.StyledMessage>
      </S.LevelProgressAndMessageWrapper>
    </S.Container>
  );
}
