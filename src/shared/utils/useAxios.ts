import axios from "axios";
import Cookies from "js-cookie";
import { useAccountExpiresStore } from "../store/account-expires-store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

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
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/oauth/token/refresh`,
          { withCredentials: true }
        );

        const newAccessToken = data.content.accessToken;
        if (newAccessToken) {
          Cookies.set("access_token", newAccessToken, {
            secure: true,
            sameSite: "None",
          });
          onTokenRefreshed(newAccessToken);
        }

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        useAccountExpiresStore.getState().setExpiresModalOpen(true);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
