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
};

export default function KakaoMap({ onClose }: MapModalProps) {
  const { kakao } = window;
  const mapRef = useRef<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [keyword, setKeyword] = useState('');
  const pinnedOverlayRef = useRef<any>(null);
  const activeOverlayRef = useRef<any>(null); // 현재 활성화된 비고정 CustomOverlay 추적

  useEffect(() => {
    const container = document.getElementById('map');
    if (!container || !kakao) return;
    const options = {
      center: new kakao.maps.LatLng(
        37.5385167,
        127.1237667
      ) /*현재 위치 강동구 천호역*/,
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
    markers.forEach((marker) => marker.setMap(null));

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

  //마커 위 말풍선 스타일
  const createCustomOverlay = (place: any, marker: any) => {
    const content = document.createElement('div');
    content.style.padding = '6px 10px';
    content.style.backgroundColor = '#fff';
    content.style.borderRadius = '4px';
    content.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    content.innerHTML = `
      <div style="font-weight:600; margin-bottom:6px;">이 위치 전송</div>
      <div style="font-size:12px; color:grey">${place.place_name}</div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      position: marker.getPosition(),
      yAnchor: 1.8, //말풍선과 마커 간격
    });

    return overlay;
  };

  const displayMarkers = (places: any[]) => {
    const { kakao } = window;
    if (!mapRef.current || !kakao) return;

    const bounds = new kakao.maps.LatLngBounds();
    const newMarkers: any[] = [];

    places.forEach((place) => {
      const position = new kakao.maps.LatLng(place.y, place.x);
      const marker = new kakao.maps.Marker({
        position,
        map: mapRef.current,
      });
      newMarkers.push(marker);

      // 각 마커에 대한 CustomOverlay 생성
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

  return (
    <S.Container>
      <S.ModalContainer>
        <S.XButton onClick={onClose}>
          <S.StyleX>X</S.StyleX>
        </S.XButton>

        <S.MapContainer id="map">
          <S.SearchBar>
            <S.SearchInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어 입력"
            />
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
      </S.ModalContainer>
    </S.Container>
  );
}
