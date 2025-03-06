import axios from "axios";
import Cookies from "js-cookie";
import eventEmitter from "./useEventEmitter";

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

  const onTokenRefreshed = (newToken: string) => {
    refreshSubscribers.forEach((callback) => callback(newToken));
    refreshSubscribers = [];
  };

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 403) {
        eventEmitter.dispatchEvent(new Event("forbidden"));
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
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
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/oauth/token/refresh`,
            { withCredentials: true }
          );

          const newAccessToken = response.data.content.accessToken;
          Cookies.set("access_token", newAccessToken, {
            secure: true,
            sameSite: "None",
          });

          onTokenRefreshed(newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("🚨 토큰 갱신 실패", refreshError);
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
