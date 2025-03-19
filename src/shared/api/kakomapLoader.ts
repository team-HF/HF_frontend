/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadKakaoMapScript = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao);
      return;
    }
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=24247c883284ca8d9484e66560ddda7d&libraries=services,clusterer,drawing&autoload=false';
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        resolve(window.kakao);
      });
    };
    script.onerror = () => {
      reject(new Error('카카오맵 API 로드 실패'));
    };
    document.body.appendChild(script);
  });
};
