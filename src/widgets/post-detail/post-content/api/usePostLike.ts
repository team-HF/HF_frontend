import Cookies from "js-cookie";
import axiosInstance from "../../../../shared/utils/useAxios";

export const usePostLike = async (postId: number, memberId?: number) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.post(
      `/hf/posts/${postId}/likes`,
      {},
      {
        params: { memberId },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting post like", error);
    throw error;
  }
};
