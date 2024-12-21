import axios from 'axios';
import Cookies from 'js-cookie';

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
      'Content-Type': 'application/json',
    },
  });

  return { axiosInstance };
};
