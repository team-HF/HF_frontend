import axios from "axios";
import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useUpdateComment = async (commentId: number, content: string) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  console.log(accessToken);
  try {
    const response = await axiosInstance.patch(
      `/hf/comments/${commentId}`,
      {
        content,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    console.log("수정 성공:", response.data);
    return response.data;
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
