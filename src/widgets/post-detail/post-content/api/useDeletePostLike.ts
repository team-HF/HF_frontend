import axiosInstance from "../../../../shared/utils/useAxios";

export const useDeletePostLike = async (likeId: number) => {
  try {
    const response = await axiosInstance.delete(`/hf/likes/${likeId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
