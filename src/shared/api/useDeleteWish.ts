import axiosInstance from "../utils/useAxios";

interface PostWishProps {
  wisherId: number | undefined;
  wishedId: number | undefined;
}

export const useDeleteWish = async ({ wisherId, wishedId }: PostWishProps) => {
  const data = {
    wisherId: wisherId,
    wishedId: wishedId,
  };
  try {
    await axiosInstance.delete("/hf/wish", { data });
  } catch (error) {
    console.error("삭제 실패:", error);
  }
};
