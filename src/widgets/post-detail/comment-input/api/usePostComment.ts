import axios from "axios";

interface PostDataProps {
  postId: number;
  commentValue: string;
}

const postComment = async ({ postId, commentValue }: PostDataProps) => {
  try {
    await axios.post(`/hf/posts/${postId}/comments`, {
      writerId: 1, //수정 필요
      content: commentValue,
    });
  } catch (error) {
    console.error("Error posing your comment", error);
    throw error;
  }
};

export default postComment;
