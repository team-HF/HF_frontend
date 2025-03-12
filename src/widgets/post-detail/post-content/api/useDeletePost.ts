import Cookies from "js-cookie";
import axiosInstance from "../../../../shared/utils/useAxios";

export const useDeletePost = async (postId: number) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.delete(`/hf/posts/${postId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
