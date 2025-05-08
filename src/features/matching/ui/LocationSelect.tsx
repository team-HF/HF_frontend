import { useState } from 'react';
import * as S from './schedule-field-style';
import KakaoMap from '../../../shared/ui/kakao-map/KakaoMap';

type LocationSelectProps = {
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
};

export default function LocationSelect({
  selectedLocation,
  setSelectedLocation,
}: LocationSelectProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleOpenMap = () => {
    setIsMapOpen(true);
  };

  const handleCloseMap = () => {
    setIsMapOpen(false);
  };

  const handleSelectLocation = (selected: string) => {
    setSelectedLocation(selected);
    setIsMapOpen(false);
  };

  return (
    <S.Container>
      <S.Title>위치</S.Title>
      <S.FieldWrapper>
        <S.FieldInput
          placeholder="위치를 선택하세요"
          value={selectedLocation}
          readOnly
          aria-label="장소"
        />
        <S.Icon
          src="/svg/location-icon.svg"
          alt="location"
          onClick={handleOpenMap}
        />
      </S.FieldWrapper>

      {isMapOpen && (
        <KakaoMap
          onClose={handleCloseMap}
          onSelectLocation={handleSelectLocation}
        />
      )}
    </S.Container>
  );
}
