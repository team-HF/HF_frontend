import LevelLabel from '../../../shared/ui/level-label/LevelLabel';
import * as S from './partner-info-style.ts';
import { useGetMatchingUserInfo } from '../../../features/matching/api/useGetMatchingUserInfo.ts';

export default function PartnerInfo({
  matchingUserId,
}: {
  matchingUserId: number;
}) {
  const {
    data: matchingUserData,
    isLoading,
    error,
  } = useGetMatchingUserInfo(matchingUserId);
  console.log(matchingUserData);
  if (isLoading || !matchingUserData) {
    return <div>로딩</div>;
  }
  if (error) return <div>error.</div>;
  const location = `${matchingUserData!.cd1 + matchingUserData!.cd2}`;

  return (
    <S.Container>
      <S.ImageWrapper $profileImageUrl={matchingUserData?.profileImageUrl} />
      <S.RightWrapper>
        <S.NameAndLevelWrapper>
          <S.StyleName>{matchingUserData?.nickname}</S.StyleName>
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
