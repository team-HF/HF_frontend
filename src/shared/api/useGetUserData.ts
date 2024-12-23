import { useAxios as Axios } from '../utils/useAxios';

export const useGetUserData = async (memberId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance(`/hf/members/${memberId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data.', error);
    throw error;
  }
};
