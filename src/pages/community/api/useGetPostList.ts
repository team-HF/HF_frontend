import { useAxios as Axios } from "../../../shared/utils/useAxios";
import { useGetParams as getParams } from "../../../shared/utils/useGetParams";

export const getPostList = async (currentPage: number) => {
  const { axiosInstance } = Axios();
  const URL =
    getParams("postCategory") === "POPULAR"
      ? `/hf/popularList`
      : `/hf/list?postCategory=${getParams("postCategory")}`;
  const params = () => {
    const result = { page: currentPage, size: 5 };
    if (getParams("fitnessLevel")) {
      return { ...result, fitnessLevel: getParams("fitnessLevel") };
    } else {
      return result;
    }
  };
  try {
    const response = await axiosInstance.get(URL, {
      params: params(),
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
