import axiosInstance from "../../../../shared/utils/useAxios";

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
  const requestData = {
    writerId,
    content,
    parentCommentId,
  };

  try {
    await axiosInstance.post(`/hf/posts/${postId}/comments`, requestData);
    window.location.reload();
  } catch (error) {
    console.error("Error creating new reply", error);
    throw error;
  }
};
