import Cookies from "js-cookie";
import { useAxios as Axios } from "../../../shared/utils/useAxios";
import { useGetParams as getParams } from "../../../shared/utils/useGetParams";

export const getPostList = async (currentPage: number) => {
  const accessToken = Cookies.get("access_token");
  const postCategory = getParams("postCategory");
  const fitnessLevel = getParams("fitnessLevel");
  const { axiosInstance } = Axios();

  const URL = postCategory === "POPULAR" ? `/hf/popularList` : `/hf/list`;

  const params = {
    page: currentPage,
    size: 5,
    ...((postCategory === "FREE_COMMUNITY" ||
      postCategory === "COUNSELING") && { postCategory }),
    ...(fitnessLevel && { fitnessLevel }),
  };

  try {
    const response = await axiosInstance.get(URL, {
      params: params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const content = response.data.content;
    if (!Array.isArray(content)) {
      throw new Error("Invalid data: 'content' is not an array.");
    }

    const totalPages =
      content.length > 0 ? content[0].totalPageSize : currentPage;

    return {
      totalPages,
      newPostList: content,
    };
  } catch (error) {
    console.error("Error fetching post list:", error);
    throw error;
  }
};
