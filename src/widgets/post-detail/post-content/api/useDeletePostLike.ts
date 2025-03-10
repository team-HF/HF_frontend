import axiosInstance from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useDeletePostLike = async (likeId: number) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.delete(`/hf/likes/${likeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
