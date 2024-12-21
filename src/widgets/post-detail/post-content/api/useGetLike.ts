import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useGetLike = async (postId: number, memberId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}/likes`, {
      params: {
        memberId,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting Post like", error);
    throw error;
  }
};
