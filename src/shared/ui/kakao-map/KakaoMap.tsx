/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { loadKakaoMapScript } from '../../api/kakomapLoader';

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
    loadKakaoMapScript()
      .then((kakao) => {
        const container = document.getElementById('map');
        if (!container) {
          return;
        }
        const options = {
          center: new kakao.maps.LatLng(37.5385167, 127.1237667),
          level: 3,
        };
        mapRef.current = new kakao.maps.Map(container, options);

        kakao.maps.event.addListener(mapRef.current, 'click', () => {
          if (pinnedOverlayRef.current) {
            pinnedOverlayRef.current.setMap(null);
            pinnedOverlayRef.current = null;
          }
        });
      })
      .catch(() => {
        alert('카카오맵 로드 에러:');
      });
  }, []);

  const handleSearch = () => {
    if (!mapRef.current || !window.kakao) return;
    if (!keyword.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    // 기존 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
    setPlaces([]); // 기존 검색 결과 제거

    const ps = new window.kakao.maps.services.Places(mapRef.current);
    ps.keywordSearch(
      keyword,
      (data: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          displayMarkers(data);
        } else {
          alert('검색 결과가 없습니다.');
        }
      },
      {
        location: mapRef.current.getCenter(),
        //반경 20km 이내에서 검색
        radius: 20000,
        sort: window.kakao.maps.services.SortBy.DISTANCE,
      }
    );
  };

  const createCustomOverlay = (place: any, marker: any) => {
    const content = document.createElement('div');
    content.style.padding = '6px 10px';
    content.style.backgroundColor = '#fff';
    content.style.borderRadius = '4px';
    content.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    content.style.cursor = 'pointer';
    content.style.pointerEvents = 'auto';
    content.style.zIndex = '10004';

    content.innerHTML = `
      <div style="font-weight:600; margin-bottom:6px;">이 위치 전송</div>
      <div style="font-size:12px; color:grey">${place.place_name}</div>
    `;
    const overlay = new window.kakao.maps.CustomOverlay({
      content: content,
      position: marker.getPosition(),
      yAnchor: 1.8,
      zIndex: 10004,
    });
    content.addEventListener('click', (e) => {
      e.stopPropagation();
      onSelectLocation(place.place_name);
      onClose();
    });
    return overlay;
  };

  const displayMarkers = (placesData: any[]) => {
    if (!mapRef.current || !window.kakao) return;

    const bounds = new window.kakao.maps.LatLngBounds();
    const newMarkers: any[] = [];

    placesData.forEach((place) => {
      const position = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = new window.kakao.maps.Marker({
        position,
        map: mapRef.current,
      });
      newMarkers.push(marker);

      const overlay = createCustomOverlay(place, marker);

      // 마우스 오버 시 오버레이를 보여주도록 함 (단, 선택은 오버레이 클릭 시)
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        if (!pinnedOverlayRef.current) {
          if (activeOverlayRef.current) {
            activeOverlayRef.current.setMap(null);
          }
          overlay.setMap(mapRef.current);
          activeOverlayRef.current = overlay;
        }
      });

      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        if (!pinnedOverlayRef.current && activeOverlayRef.current === overlay) {
          overlay.setMap(null);
          activeOverlayRef.current = null;
        }
      });

      // 수정된 부분: 마커 클릭 시 오버레이를 보여주고 곧바로 해당 오버레이의 클릭 이벤트를 강제로 발생시켜 선택하도록 함
      window.kakao.maps.event.addListener(marker, 'click', () => {
        // 다른 오버레이가 고정되어 있다면 제거
        if (pinnedOverlayRef.current && pinnedOverlayRef.current !== overlay) {
          pinnedOverlayRef.current.setMap(null);
          pinnedOverlayRef.current = null;
        }
        // 오버레이를 지도에 표시하고 고정 상태로 지정
        overlay.setMap(mapRef.current);
        pinnedOverlayRef.current = overlay;
        activeOverlayRef.current = null;

        // 오버레이가 렌더링된 후 강제로 클릭 이벤트를 발생시킴
        setTimeout(() => {
          const contentElement = overlay.getContent();
          if (contentElement) {
            contentElement.dispatchEvent(
              new MouseEvent('click', { bubbles: true })
            );
          }
        }, 0);
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

  const handleSelectPlace = (place: any) => {
    if (!mapRef.current || !window.kakao) return;

    const position = new window.kakao.maps.LatLng(place.y, place.x);
    mapRef.current.setCenter(position);
    mapRef.current.setLevel(3);

    const selectedMarker = markers.find(
      (marker: any) =>
        marker.getPosition().getLat() === parseFloat(place.y) &&
        marker.getPosition().getLng() === parseFloat(place.x)
    );

    if (selectedMarker) {
      if (activeOverlayRef.current) {
        activeOverlayRef.current.setMap(null);
      }
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
          {places.length > 0 && (
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
          )}
        </S.ResultsContainer>
      </S.ModalContainer>
    </S.Container>
  );
}
