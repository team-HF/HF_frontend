import { useAxios as Axios } from "../utils/useAxios";

export const getNotification = async () => {
  const { axiosInstance } = Axios();
  const response = await axiosInstance.get("/hf/notification/list", {
    params: { size: 5 },
  });
  console.log(response.data);
};
