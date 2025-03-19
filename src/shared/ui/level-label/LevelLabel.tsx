import * as S from './style';

type LevelLabel = {
  matchingUserTier?: {
    fitnessLevel?: string;
    tier?: number;
  };
};
export default function LevelLabel({ matchingUserTier }: LevelLabel) {
  if (!matchingUserTier) {
    return <p>사용자 정보를 불러올 수 없습니다.</p>;
  }
  const { fitnessLevel, tier } = matchingUserTier;
  return <S.Container level={fitnessLevel}>Lv.{tier}</S.Container>;
}
