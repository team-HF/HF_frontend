/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import * as S from './style';

declare global {
  interface Window {
    kakao: any;
  }
}

type MapModalProps = {
  onClose: () => void;
  onSelectLocation: (location: string) => void;
};

export default function KakaoMap({ onClose, onSelectLocation }: MapModalProps) {
  const { kakao } = window;
  const mapRef = useRef<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [places, setPlaces] = useState<any[]>([]);
  const [keyword, setKeyword] = useState('');
  const [viewList, setViewList] = useState(true);
  const pinnedOverlayRef = useRef<any>(null);
  const activeOverlayRef = useRef<any>(null);
  const resetKeyword = () => {
    setKeyword('');
  };
  useEffect(() => {
    const container = document.getElementById('map');
    if (!container || !kakao) return;
    const options = {
      center: new kakao.maps.LatLng(37.5385167, 127.1237667), // 현재 기본 위치 값 강동구 천호역
      level: 3,
    };
    mapRef.current = new kakao.maps.Map(container, options);

    kakao.maps.event.addListener(mapRef.current, 'click', () => {
      if (pinnedOverlayRef.current) {
        pinnedOverlayRef.current.setMap(null);
        pinnedOverlayRef.current = null;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    if (!mapRef.current || !kakao) return;
    if (!keyword.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    // 기존 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
    setPlaces([]); // 기존 검색 결과 제거

    const ps = new kakao.maps.services.Places(mapRef.current);
    ps.keywordSearch(
      keyword,
      (data: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          displayMarkers(data);
        } else {
          alert('검색 결과가 없습니다.');
        }
      },
      {
        location: mapRef.current.getCenter(),
        radius: 3000,
        sort: kakao.maps.services.SortBy.DISTANCE,
      }
    );
  };

  // 마커 위 말풍선 스타일
  const createCustomOverlay = (place: any, marker: any) => {
    const content = document.createElement('div');
    content.style.padding = '6px 10px';
    content.style.backgroundColor = '#fff';
    content.style.borderRadius = '4px';
    content.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    content.style.cursor = 'pointer';
    content.style.pointerEvents = 'auto';
    content.style.zIndex = '9999';

    content.innerHTML = `
      <div style="font-weight:600; margin-bottom:6px;">이 위치 전송</div>
      <div style="font-size:12px; color:grey">${place.place_name}</div>
    `;
    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      position: marker.getPosition(),
      yAnchor: 1.8,
      zIndex: 9999,
    });
    content.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('클릭');
      onSelectLocation(place.place_name);
      onClose();
    });

    return overlay;
  };

  const displayMarkers = (placesData: any[]) => {
    const { kakao } = window;
    if (!mapRef.current || !kakao) return;

    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers: any[] = [];

    placesData.forEach((place) => {
      const position = new kakao.maps.LatLng(place.y, place.x);
      const marker = new kakao.maps.Marker({
        position,
        map: mapRef.current,
      });
      newMarkers.push(marker);
      console.log('places:', placesData);
      // 마커 오버레이 생성
      const overlay = createCustomOverlay(place, marker);

      // 마우스 오버 이벤트
      kakao.maps.event.addListener(marker, 'mouseover', () => {
        if (!pinnedOverlayRef.current) {
          if (activeOverlayRef.current) {
            activeOverlayRef.current.setMap(null);
          }
          overlay.setMap(mapRef.current);
          activeOverlayRef.current = overlay;
        }
      });

      // 마우스 아웃 이벤트
      kakao.maps.event.addListener(marker, 'mouseout', () => {
        if (!pinnedOverlayRef.current && activeOverlayRef.current === overlay) {
          overlay.setMap(null);
          activeOverlayRef.current = null;
        }
      });

      // 클릭 이벤트 (이때는 마커가 고정)
      kakao.maps.event.addListener(marker, 'click', () => {
        if (pinnedOverlayRef.current && pinnedOverlayRef.current !== overlay) {
          pinnedOverlayRef.current.setMap(null);
          pinnedOverlayRef.current = null;
        }

        if (pinnedOverlayRef.current === overlay) {
          overlay.setMap(null);
          pinnedOverlayRef.current = null;
        } else {
          overlay.setMap(mapRef.current);
          pinnedOverlayRef.current = overlay;
          activeOverlayRef.current = null;
        }
      });

      bounds.extend(position);
    });

    setMarkers(newMarkers);
    setPlaces(placesData);
    mapRef.current.setBounds(bounds);
  };

  const handleZoomIn = () => {
    if (!mapRef.current) return;
    mapRef.current.setLevel(mapRef.current.getLevel() - 1);
  };

  const handleZoomOut = () => {
    if (!mapRef.current) return;
    mapRef.current.setLevel(mapRef.current.getLevel() + 1);
  };

  // 리스트 항목 클릭 시 동작
  const handleSelectPlace = (place: any) => {
    if (!mapRef.current || !kakao) return;

    const position = new kakao.maps.LatLng(place.y, place.x);
    mapRef.current.setCenter(position);
    mapRef.current.setLevel(3); // 원하는 줌 레벨로 설정

    // 해당 장소의 마커 찾기
    const selectedMarker = markers.find(
      (marker: any) =>
        marker.getPosition().getLat() === parseFloat(place.y) &&
        marker.getPosition().getLng() === parseFloat(place.x)
    );

    if (selectedMarker) {
      // 기존 오버레이 제거
      if (activeOverlayRef.current) {
        activeOverlayRef.current.setMap(null);
      }

      // 선택된 마커의 오버레이 표시
      const overlay = createCustomOverlay(place, selectedMarker);
      overlay.setMap(mapRef.current);
      activeOverlayRef.current = overlay;
    }
  };
  const controlPlaceList = () => {
    setViewList((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [places]);
  return (
    <S.Container>
      <S.ModalContainer>
        <S.UpperWrapper>
          <S.XButton onClick={onClose}>
            <S.StyleX src="/svg/white-x-icon.svg" alt="close-button" />
          </S.XButton>
          <S.MapText>지도</S.MapText>
        </S.UpperWrapper>

        <S.MapContainer id="map">
          <S.SearchBar>
            <S.SearchInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어 입력"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <S.CircleButton onClick={resetKeyword}>
              <S.XIcon>x</S.XIcon>
            </S.CircleButton>
            <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
          </S.SearchBar>

          <S.ZoomControl>
            <S.ZoomIconWrapper onClick={handleZoomIn}>
              <S.ZoomIcon
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
                alt="확대"
              />
            </S.ZoomIconWrapper>
            <S.ZoomIconWrapper onClick={handleZoomOut}>
              <S.ZoomIcon
                src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
                alt="축소"
              />
            </S.ZoomIconWrapper>
          </S.ZoomControl>
        </S.MapContainer>

        <S.ResultsContainer
          $viewList={viewList}
          style={{
            position: viewList ? 'sticky' : 'absolute',
            ...(viewList ? { top: 0 } : { bottom: 0 }),
          }}
        >
          {places.length > 0 ? (
            <>
              <S.ResultsHeaderWrapper>
                <S.ResultHeaderText>검색 결과</S.ResultHeaderText>
                <S.ResultHeaderSVG
                  src={
                    viewList
                      ? '/svg/white-under-arrow-icon.svg'
                      : '/svg/white--arrow-icon.svg'
                  }
                  alt="under-arrow"
                  onClick={controlPlaceList}
                />
              </S.ResultsHeaderWrapper>
              <S.PlaceWrapper style={{ display: viewList ? 'block' : 'none' }}>
                {places.map((place, index) => (
                  <li key={index} onClick={() => handleSelectPlace(place)}>
                    <S.PlaceName>{place.place_name}</S.PlaceName>
                    <S.PlaceAddress>{place.address_name}</S.PlaceAddress>
                  </li>
                ))}
              </S.PlaceWrapper>
            </>
          ) : null}
        </S.ResultsContainer>
      </S.ModalContainer>
    </S.Container>
  );
}
