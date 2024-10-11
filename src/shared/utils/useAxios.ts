import axios from 'axios';

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return { axiosInstance };
};
