import axiosInstance from "../../../../shared/utils/useAxios";
import Cookies from "js-cookie";

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
  const accessToken = Cookies.get("access_token");
  try {
    await axiosInstance.post(
      `/hf/posts/${postId}/comments`,
      {
        writerId: writerId,
        content: commentValue,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    window.location.reload();
  } catch (error) {
    console.error("Error posing your comment", error);
    throw error;
  }
};

export default postComment;
