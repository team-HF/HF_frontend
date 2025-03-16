import axiosInstance from "../../../../shared/utils/useAxios";

export const useGetLike = async (
  postId: number,
  memberId: number | undefined
) => {
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}/likes`, {
      params: {
        memberId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting Post like", error);
    throw error;
  }
};
