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
    const totalPages: number = response.data.totalPages;
    return {
      newPostList,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching post list:", error);
    window.alert("Error fetching post list.");
    throw error;
  }
};
