import { AxiosInstance } from "axios";
import { TCategoryId } from "../../../entities/community/contents-type-data";

export const getPostList = async (
  category: TCategoryId,
  axiosInstance: AxiosInstance,
  currentPage: number
) => {
  try {
    const URL = category === "POPULAR" ? `/popularList` : `/list`;
    const response = await axiosInstance.get(URL, {
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
