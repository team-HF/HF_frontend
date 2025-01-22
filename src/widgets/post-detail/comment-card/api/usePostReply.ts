import { useAxios as Axios } from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

interface usePostReplyProps {
  postId: number;
  writerId?: number;
  content: string;
  parentCommentId: number;
}

export const usePostReply = async ({
  postId,
  writerId,
  content,
  parentCommentId,
}: usePostReplyProps) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  const requestData = {
    writerId,
    content,
    parentCommentId,
  };
  console.log(postId, requestData);
  try {
    const response = await axiosInstance.post(
      `/hf/posts/${postId}/comments`,
      requestData,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating new reply", error);
    throw error;
  }
};
