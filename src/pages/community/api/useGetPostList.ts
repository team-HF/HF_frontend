import { AxiosInstance } from "axios";

export const getPostList = async (
  axiosInstance: AxiosInstance,
  currentPage: number
) => {
  try {
    const response = await axiosInstance.get("/hf/list", {
      params: {
        page: currentPage,
      },
    });
    const newPostList = response.data.content;
    if (!Array.isArray(newPostList)) {
      throw new Error("Error fetching post list.");
    }
    const totalPages: number = response.data.totalPageSize;
    return {
      totalPages,
      newPostList,
    };
  } catch (error) {
    console.error("Error fetching post list:", error);
    throw error;
  }
};
