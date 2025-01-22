import { useAxios as Axios } from "../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useGetPostDetail = async (postId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting Post detail", error);
    throw error;
  }
};
