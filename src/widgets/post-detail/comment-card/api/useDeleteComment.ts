import axiosInstance from "../../../../shared/utils/useAxios";

export const useDeleteComment = async (commentId: number) => {
  try {
    await axiosInstance.delete(`/hf/comments/${commentId}`);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting post like", error);
    throw error;
  }
};
