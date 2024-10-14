import axios from "axios";

const getPostDetail = async (postId: number) => {
  try {
    const response = await axios.get(`/hf/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting Post detail", error);
    throw error;
  }
};

export default getPostDetail;
