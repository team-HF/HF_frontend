import axios from "axios";
import { useAxios as Axios } from "../../../../shared/utils/useAxios";

export const useDeleteComment = async (commentId: number) => {
  console.log(commentId);
  const { axiosInstance } = Axios();
  try {
    const response = await axiosInstance.delete(`/hf/comments/${commentId}`);
    console.log(response.data);
    // return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error Response:", error.response);
      console.error("Status Code:", error.response?.status);
      console.error("Error Message:", error.response?.data);
    } else {
      console.error("Unknown Error:", error);
    }
    throw error;
  }
};
