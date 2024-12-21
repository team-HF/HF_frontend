import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

export const useUpdateComment = async (commentId: number, content: string) => {
  console.log(commentId, content);
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.patch(
      `/hf/posts/${commentId}`,
      {
        content: content,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating post", error);
    throw error;
  }
};
