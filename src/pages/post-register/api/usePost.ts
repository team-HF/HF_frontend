import { useAxios as Axios } from "../../../shared/utils/useAxios";

interface PostProps {
  category: string;
  title: string;
  content: string;
  writerId: number | undefined;
}

const communityPostApi = async (postData: PostProps) => {
  const { axiosInstance } = Axios();

  try {
    const response = await axiosInstance.post(
      "/hf/posts",
      { ...postData, writerId: postData.writerId, imagePath: null },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default communityPostApi;
