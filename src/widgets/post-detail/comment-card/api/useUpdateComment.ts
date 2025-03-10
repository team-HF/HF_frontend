import axios from "axios";
import axiosInstance from "../../../../shared/utils/useAxios";

export const useUpdateComment = async (commentId: number, content: string) => {
  try {
    const response = await axiosInstance.patch(`/hf/comments/${commentId}`, {
      content,
    });

    return response;
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
