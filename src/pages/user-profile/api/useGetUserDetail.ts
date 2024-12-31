import { useAxios as Axios } from "../../../shared/utils/useAxios";

export const useGetUserDetail = async (memberId: number) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.get(`/hf/members/${memberId}/profile`);
    return response.data.content;
  } catch (error) {
    console.error("Error getting user data", error);
  }
};
