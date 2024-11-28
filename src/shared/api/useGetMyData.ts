import { useAxios as Axios } from "../utils/useAxios";

export const useGetMyData = async () => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.get("/oauth/token/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data.", error);
    throw error;
  }
};
