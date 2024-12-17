import axios from "axios";

interface GetCommentProps {
  postId: number;
  sortType: string;
}

const getComment = async ({
  postId,
  sortType,
}: GetCommentProps)  => {
  try {
    const response = await axios.get(
      `/hf/posts/${postId}/comments?sortType=${sortType}`
    );
    return response
  } catch (error) {
    console.error("Error getting comments", error);
    throw error;
  }
};

export default getComment;
