import axiosInstance from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useDeleteComment = async (commentId: number) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.delete(`/hf/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
