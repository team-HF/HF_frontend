import Cookies from "js-cookie";
import axiosInstance from "../../../shared/utils/useAxios";

interface UpdateProps {
  postId: number;
  writerId: number | undefined;
  category: string;
  title: string;
  content: string;
}

export const usePostUpdate = async (postData: UpdateProps) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.patch(
      `/hf/posts/${postData.postId}`,
      {
        category: postData.category,
        title: postData.title,
        content: postData.content,
        writerId: postData.writerId,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating post", error);
    throw error;
  }
};
