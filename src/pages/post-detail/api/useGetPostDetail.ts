import { useAxios as Axios } from "../../../shared/utils/useAxios";

export const useGetPostDetail = async (postId: number, onError: () => void) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}`);
    return response.data.content;
  } catch (error) {
    const err = error as { status: number };
    if (err.status === 404) {
      onError();
    }
    throw error;
  }
};
