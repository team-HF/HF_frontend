import { useAxios as Axios } from "../utils/useAxios";

export const useGetSearchData = async () => {
  const { axiosInstance } = Axios();
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParams = Object.fromEntries(urlParams.entries());
    const response = await axiosInstance.get("/hf/search", {
      params: {
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
