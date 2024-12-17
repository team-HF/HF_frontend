import { useAxios as Axios } from "../../../../shared/utils/useAxios";

const getPostDetail = async (postId: number) => {
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.get(`/hf/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting Post detail", error);
    throw error;
  }
};

export default getPostDetail;
