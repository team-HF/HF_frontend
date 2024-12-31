import { useAxios as Axios } from "../utils/useAxios";

export const useGetUserData = async (memberId: number) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance(`/hf/members/${memberId}`);
    return response.data.content;
  } catch (error) {
    console.error("Error fetching user data.", error);
    throw error;
  }
};
