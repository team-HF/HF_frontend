import axiosInstance from "../../../shared/utils/useAxios";
import { useGetParams as getParams } from "../../../shared/utils/useGetParams";

export const getPostList = async (currentPage: number) => {
  const postCategory = getParams("postCategory");
  const fitnessLevel = getParams("fitnessLevel");

  const URL = postCategory === "POPULAR" ? `/hf/popularList` : `/hf/list`;

  const params = {
    page: currentPage,
    size: 10,
    ...((postCategory === "FREE_COMMUNITY" ||
      postCategory === "COUNSELING") && { postCategory }),
    ...(fitnessLevel && fitnessLevel !== "ALL" && { fitnessLevel }),
  };

  try {
    const response = await axiosInstance.get(URL, {
      params: params,
    });

    const content = response.data.content;
    if (!Array.isArray(content.postList)) {
      throw new Error("Invalid data: 'content' is not an array.");
    }
    const totalPages =
      content.postList.length > 0 ? content.totalPageSize : currentPage;

    return {
      totalPages,
      newPostList: content.postList,
    };
  } catch (error) {
    console.error("Error fetching post list:", error);
    throw error;
  }
};
