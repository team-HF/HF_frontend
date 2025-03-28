import { useEffect, useState } from "react";
import * as S from "./style";
import { getSgisApiAccessToken } from "../../api/getSgisApiAccessToken";
import { getSgisLocationData } from "../../api/getSgisLocationData";
import { useLocationStore } from "../../store/location-store";

interface Location {
  addr_name: string;
  cd: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
}

const LocationSelectBar = () => {
  const { cd1, cd2, cd3, setCd1, setCd2, setCd3, reset } = useLocationStore();

  const [userLocation, setUserLocation] = useState<string>("");
  const [locationData, setLocationData] = useState<Location[]>([]);

  const getLocationData = async () => {
    const result = await getSgisLocationData(cd3 || cd2 || cd1);

    if (!result) {
      await getSgisApiAccessToken();
      const reloadResult = await getSgisLocationData(cd3 || cd2 || cd1);
      setLocationData(reloadResult);
    } else {
      setLocationData(result);
    }
  };

  const onClickLocationCard = (cd: string, full_addr: string) => {
    if (!cd1) setCd1(cd);
    else if (!cd2) setCd2(cd);
    else setCd3(cd);
    setUserLocation(full_addr);
  };

  const onClickReset = () => {
    setUserLocation("");
    reset();
  };

  useEffect(() => {
    const sgisToken = sessionStorage.getItem("sgisAccessToken");
    if (!sgisToken) {
      getSgisApiAccessToken().then(() => getLocationData());
    } else {
      getLocationData();
    }
  }, [cd1, cd2, cd3]);

  useEffect(() => {
    (async () => {
      if (cd3) {
        const result = await getSgisLocationData(cd2);
        const locName = result.filter(
          (loc: { cd: string }) => loc.cd === cd3
        )[0].full_addr;
        setUserLocation(locName);
      } else if (cd2) {
        const result = await getSgisLocationData(cd1);
        const locName = result.filter(
          (loc: { cd: string }) => loc.cd === cd2
        )[0].full_addr;
        setUserLocation(locName);
      } else if (cd1) {
        const result = await getSgisLocationData(null);
        const locName = result.filter(
          (loc: { cd: string }) => loc.cd === cd1
        )[0].full_addr;
        setUserLocation(locName);
      } else {
        return;
      }
    })();
  }, []);

  const locationCards = locationData.map((data) => (
    <S.LocationCard
      key={`locationBtn_cd${data.cd}`}
      onClick={() => onClickLocationCard(data.cd, data.full_addr)}
    >
      {data.full_addr}
    </S.LocationCard>
  ));

  return (
    <S.Container>
      <S.Label>위치</S.Label>
      <S.LocationContainer>
        <S.Input value={userLocation} placeholder="위치" disabled />
        <S.ResetBtn onClick={() => onClickReset()}>초기화</S.ResetBtn>
      </S.LocationContainer>
      <S.LocationList>{locationCards}</S.LocationList>
    </S.Container>
  );
};

export default LocationSelectBar;
