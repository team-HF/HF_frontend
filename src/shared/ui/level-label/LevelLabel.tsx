import * as S from './style';
import { useGetMyData } from '../../api/useGetMyData';

export default function LevelLabel() {
  const { data: myData, isLoading, isError } = useGetMyData();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>레벨 정보를 불러올 수 없습니다.</div>;
  }
  const { fitnessLevel, tier } = myData!.tier;
  return <S.Container level={fitnessLevel}>Lv.{tier}</S.Container>;
}
