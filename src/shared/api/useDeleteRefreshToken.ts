import Cookies from "js-cookie";
import axiosInstance from "../utils/useAxios";

export const useDeleteRefreshToken = async () => {
  try {
    await axiosInstance.delete("/oauth/token/refresh-token");
    Cookies.remove("access_token");
    Cookies.remove("is_new_member");
    Cookies.remove("email");
    Cookies.remove("name");
  } catch (error) {
    console.error("Error deleting refresh token", error);
  }
};
