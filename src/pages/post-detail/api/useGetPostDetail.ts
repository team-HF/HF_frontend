import { useAxios as Axios } from "../../../shared/utils/useAxios";

export const useGetPostDetail = async (postId: number) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting Post detail", error);
    throw error;
  }
};
