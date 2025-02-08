import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useDeleteComment = async (commentId: number) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.delete(`/hf/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting comment", error);
    throw error;
  }
};
