import { useAxios as Axios } from "../utils/useAxios";
import Cookies from "js-cookie";

export const useGetMyData = async () => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.get("/oauth/token/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data.", error);
    throw error;
  }
};
