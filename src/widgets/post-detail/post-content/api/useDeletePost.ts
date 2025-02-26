import { useAxios as Axios } from "../../../../shared/utils/useAxios";

export const useDeletePost = async (postId: number) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.delete(`/hf/posts/${postId}`, {
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
