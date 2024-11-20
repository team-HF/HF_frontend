import axios from "axios";

const communityPostApi = async (data: {
  postCategory: string;
  postTitle: string;
  postContent: string;
  writerId: number;
}) => {
  try {
    const response = await axios.post(
      "/hf/posts", // 서버 엔드포인트 수정 필요
      {
        category: data.postCategory,
        title: data.postTitle,
        content: data.postContent,
        writerId: data.writerId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default communityPostApi;
