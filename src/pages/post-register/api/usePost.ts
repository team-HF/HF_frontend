import { useGetMyData as getMyData } from "../../../shared/api/useGetMyData";
import { useAxios as Axios } from "../../../shared/utils/useAxios";

interface PostProps {
  category: string;
  title: string;
  content: string;
}

const communityPostApi = async (data: PostProps) => {
  const { axiosInstance } = Axios();
  const userDataResponse = await getMyData();
  const writerId = userDataResponse.content.memberId;
  try {
    const response = await axiosInstance.post(
      "/hf/posts",
      {
        category: data.category,
        title: data.title,
        content: data.content,
        writerId: writerId,
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
