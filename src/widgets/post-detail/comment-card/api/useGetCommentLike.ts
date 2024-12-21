import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useGetCommentLike = async (commentId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.get(
      `/hf/comments/${commentId}/likes`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching comment like", error);
    throw error;
  }
};
