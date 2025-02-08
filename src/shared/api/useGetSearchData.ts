import { useAxios as Axios } from "../utils/useAxios";

export const useGetSearchData = async () => {
  const { axiosInstance } = Axios();

  try {
    const response = await axiosInstance.get("/hf/search", {
      params: {
        size: 5,
        companionStyles: "SMALL",
        keyword: "안녕",
      },
    });
    return response.data.content;
  } catch (error) {
    console.error("Error searching", error);
    throw error;
  }
};
