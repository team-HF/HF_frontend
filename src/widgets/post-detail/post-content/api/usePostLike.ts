import axiosInstance from "../../../../shared/utils/useAxios";

export const usePostLike = async (postId: number, memberId?: number) => {
  try {
    const response = await axiosInstance.post(
      `/hf/posts/${postId}/likes`,
      {},
      {
        params: { memberId },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting post like", error);
    throw error;
  }
};
