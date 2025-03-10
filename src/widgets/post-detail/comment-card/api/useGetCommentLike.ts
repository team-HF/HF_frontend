import axiosInstance from "../../../../shared/utils/useAxios";

export const useGetCommentLike = async (commentId: number) => {
  try {
    const response = await axiosInstance.get(`/hf/comments/${commentId}/likes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comment like", error);
    throw error;
  }
};
