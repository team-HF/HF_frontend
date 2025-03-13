import axiosInstance from "../utils/useAxios";

interface PostWishProps {
  wisherId: number | undefined;
  wishedId: number | undefined;
}

export const usePostWish = async ({ wisherId, wishedId }: PostWishProps) => {
  try {
    const result = await axiosInstance.post("/hf/wish", {
      wisherId: wisherId,
      wishedId: wishedId,
    });
    return result.data.content;
  } catch (error) {
    console.error("Error posting new wish", error);
    throw error;
  }
};
