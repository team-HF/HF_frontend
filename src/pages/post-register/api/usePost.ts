import Cookies from "js-cookie";
import axiosInstance from "../../../shared/utils/useAxios";

interface PostProps {
  category: string;
  title: string;
  content: string;
  writerId: number | undefined;
}

const communityPostApi = async (postData: PostProps) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.post(
      "/hf/posts",
      { ...postData, writerId: postData.writerId, imagePath: null },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default communityPostApi;
