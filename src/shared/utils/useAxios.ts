import axios from "axios";
import Cookies from "js-cookie";

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = Cookies.get("access_token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  let isRefreshing = false;
  let refreshSubscribers: ((token: string) => void)[] = [];

  // 🔹 토큰 갱신을 기다리는 요청을 처리하는 함수
  const onTokenRefreshed = (newToken: string) => {
    refreshSubscribers.forEach((callback) => callback(newToken));
    refreshSubscribers = [];
  };

  // 🔹 403 또는 401 발생 시, 자동으로 access_token 재발급
  axiosInstance.interceptors.response.use(
    (response) => response, // 성공 응답 그대로 반환
    async (error) => {
      const originalRequest = error.config;

      // access_token 만료(403 또는 401)이고, 재요청이 아니라면
      if (
        (error.response?.status === 403 || error.response?.status === 401) &&
        !originalRequest._retry
      ) {
        if (isRefreshing) {
          // 이미 refresh 요청이 진행 중이면, 새 요청을 대기 상태로 둠
          return new Promise((resolve) => {
            refreshSubscribers.push((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(axiosInstance(originalRequest));
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          // 🔹 Refresh Token을 사용해 새로운 Access Token 요청
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/oauth/token/refresh`,
            {
              withCredentials: true, // 쿠키에 있는 refresh token 자동 포함
            }
          );
          const newAccessToken = response.data.content.accessToken;
          console.log(newAccessToken);
          Cookies.set("access_token", newAccessToken, {
            secure: true,
            sameSite: "None",
          });
          // 대기 중인 요청들을 새 토큰으로 재시도
          onTokenRefreshed(newAccessToken);

          // 원래 요청을 다시 실행
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("토큰 갱신 실패", refreshError);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
  return { axiosInstance };
};
