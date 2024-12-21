import { useGetMyData as getMyData } from "../../../shared/api/useGetMyData";
import { useAxios as Axios } from "../../../shared/utils/useAxios";
import Cookies from "js-cookie";

interface PostProps {
  category: string;
  title: string;
  content: string;
}

const communityPostApi = async (data: PostProps) => {
  const { axiosInstance } = Axios();
  const accessToken = Cookies.get("access_token");
  const userDataResponse = await getMyData();
  const writerId = userDataResponse.content.memberId;
  const postData = {
    category: data.category,
    title: data.title,
    content: data.content,
    writerId: writerId,
    imagePath: null,
  };
  try {
    const response = await axiosInstance.post("/hf/posts", postData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default communityPostApi;
