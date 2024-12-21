import { useAxios as Axios } from "../../../shared/utils/useAxios";
import Cookies from "js-cookie";
import { useGetMyData as getMyData } from "../../../shared/api/useGetMyData";

interface UpdateProps {
  postId: number;
  category: string;
  title: string;
  content: string;
}

export const usePostUpdate = async (postData: UpdateProps) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  const userDataResponse = await getMyData();
  const writerId = userDataResponse.content.memberId;
  try {
    const response = await axiosInstance.patch(
      `/hf/posts/${postData.postId}`,
      {
        category: postData.category,
        title: postData.title,
        content: postData.content,
        writerId: writerId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating post", error);
    throw error;
  }
};
