import axiosInstance from "../utils/useAxios";

export const useGetSearchData = async (currentPage: number) => {
  const urlParams = new URLSearchParams(window.location.search);
  const queryParams = Object.fromEntries(urlParams.entries());

  try {
    const response = await axiosInstance.get("/hf/search", {
      params: {
        page: currentPage,
        size: 5,
        ...queryParams,
      },
    });
    return response.data.content;
  } catch (error) {
    console.error("Error searching", error);
    throw error;
  }
};
