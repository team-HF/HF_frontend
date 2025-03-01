import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useDeleteComment = async (commentId: number) => {
  console.log(commentId);
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  console.log(accessToken);
  try {
    const response = await axiosInstance.delete(`/hf/comments/${commentId}`, {
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
