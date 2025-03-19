import axiosInstance from "../utils/useAxios";

interface PostWishProps {
  wisherId: number | undefined;
  wishedId: number | undefined;
}

export const usePostWish = async ({ wisherId, wishedId }: PostWishProps) => {
  const data = {
    wisherId: wisherId,
    wishedId: wishedId,
  };
  try {
    const result = await axiosInstance.post("/hf/wish", data);
    return result.data.content;
  } catch (error) {
    console.error("Error posting new wish", error);
    throw error;
  }
};
