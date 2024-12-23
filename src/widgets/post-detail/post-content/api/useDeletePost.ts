import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useDeletePost = async (postId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  console.log(postId);
  try {
    console.log("deleting post");
    const response = await axiosInstance.delete(`/hf/posts/${postId}`, {
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
