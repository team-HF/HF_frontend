/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import { useAccountExpiresStore } from "../store/account-expires-store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: any): InternalAxiosRequestConfig => {
    const token: string | undefined = Cookies.get("access_token");
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    return config;
  },
  (error: any): Promise<any> => Promise.reject(error)
);

let isRefreshing: boolean = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (newToken: string): void => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<any> => {
    const originalRequest = error.config as any & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token: string) => {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${token}`,
            };
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
        const data = response.data as { content: { accessToken: string } };
        const newAccessToken = data.content.accessToken;

        if (newAccessToken) {
          Cookies.set("access_token", newAccessToken, {
            secure: true,
            sameSite: "None",
          });
          onTokenRefreshed(newAccessToken);
        }
        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
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
