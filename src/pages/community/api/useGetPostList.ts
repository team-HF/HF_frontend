import { AxiosInstance } from "axios";

const getPostList = async (
  axiosInstance: AxiosInstance,
  currentPage: number
) => {
  try {
    const response = await axiosInstance.get(`/hf/list`, {
      params: {
        page: currentPage,
        size: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Getting community post", error);
    throw error;
  }
};

export default getPostList;
