import { useAxios as Axios } from "../utils/useAxios";

interface PostWishProps {
  wisherId: number;
  wishedId: number;
}

export const usePostWish = async ({ wisherId, wishedId }: PostWishProps) => {
  const { axiosInstance } = Axios();
  console.log("run");
  try {
    const result = await axiosInstance.post("/hf/wish", {
      wisherId: wisherId,
      wishedId: wishedId,
    });
    console.log(result.data);
  } catch (error) {
    console.error("Error posting new wish", error);
    throw error;
  }
};
