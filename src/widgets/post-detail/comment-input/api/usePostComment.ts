import axiosInstance from "../../../../shared/utils/useAxios";

interface PostDataProps {
  writerId?: number;
  postId: number;
  commentValue: string;
}

const postComment = async ({
  writerId,
  postId,
  commentValue,
}: PostDataProps) => {
  try {
    await axiosInstance.post(
      `/hf/posts/${postId}/comments`,
      {
        writerId: writerId,
        content: commentValue,
      },
    );
    window.location.reload();
  } catch (error) {
    console.error("Error posing your comment", error);
    throw error;
  }
};

export default postComment;
