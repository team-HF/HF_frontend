import axiosInstance from "../../../../shared/utils/useAxios";
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
  const accessToken = Cookies.get("access_token");
  const requestData = {
    writerId,
    content,
    parentCommentId,
  };

  try {
    await axiosInstance.post(`/hf/posts/${postId}/comments`, requestData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    window.location.reload();
  } catch (error) {
    console.error("Error creating new reply", error);
    throw error;
  }
};
