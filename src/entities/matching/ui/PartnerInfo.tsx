import LevelLabel from '../../../shared/ui/level-label/LevelLabel';
import * as S from './partner-info-style.ts';
import { useGetMatchingUserInfo } from '../../../features/matching/api/useGetMatchingUserInfo.ts';
import { useEffect, useState } from 'react';
import { getSgisApiAccessToken } from '../../../shared/api/getSgisApiAccessToken.ts';
import { getSgisLocation } from '../../../shared/api/getSgisLocation.ts';
import Loader from '../../../shared/ui/loader/Loader.tsx';

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
  const [location, setLocation] = useState('');
  useEffect(() => {
    (async () => {
      if (matchingUserData) {
        await getSgisApiAccessToken();
        const result = await getSgisLocation(
          `${matchingUserData?.cd1}${matchingUserData?.cd2}`,
          `${matchingUserData?.cd1}${matchingUserData?.cd2}${matchingUserData?.cd3}`
        );

        setLocation(result.full_addr);
      }
    })();
  }, [matchingUserData]);
  if (isLoading || !matchingUserData) {
    return <Loader />;
  }

  if (error) return <div>error.</div>;

  return (
    <S.Container>
      <S.ImageWrapper $profileImageUrl={matchingUserData?.profileImageUrl} />
      <S.RightWrapper>
        <S.NameAndLevelWrapper>
          <S.StyleName>{matchingUserData?.nickname}</S.StyleName>
          <LevelLabel matchingUserTier={matchingUserData.tier} />
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
