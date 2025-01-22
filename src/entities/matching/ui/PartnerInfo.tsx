import { useGetMyData } from '../../../shared/api/useGetMyData';
import LevelLabel from '../../../shared/ui/level-label/LevelLabel';
import * as S from './partner-info-style.ts';

export default function PartnerInfo() {
  //매칭 상대 데이터로 변경해야 함

  const { data: 임시데이터, isLoading } = useGetMyData();
  if (isLoading || !임시데이터) {
    return <div>로딩</div>;
  }
  const location = `${임시데이터!.cd1 + 임시데이터!.cd2}`;

  return (
    <S.Container>
      <S.ImageWrapper $profileImageUrl={임시데이터?.profileImageUrl} />
      <S.RightWrapper>
        <S.NameAndLevelWrapper>
          <S.StyleName>{임시데이터?.nickname}</S.StyleName>
          <LevelLabel />
        </S.NameAndLevelWrapper>
        <S.LocationWrapper>
          <S.StyleLocationSvg
            src="/svg/location-icon.svg"
            alt="location-icon"
          />
          <S.StyleLocationAddress>{location}</S.StyleLocationAddress>
        </S.LocationWrapper>
      </S.RightWrapper>
    </S.Container>
  );
}
