import axiosInstance from "../../../../shared/utils/useAxios";

export const usePostCommentLike = async (
  commentId: number,
  memberId?: number
) => {
  try {
    const response = await axiosInstance.post(
      `/hf/comments/${commentId}/likes`,
      {},
      {
        params: {
          memberId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating new like", error);
    throw error;
  }
};
