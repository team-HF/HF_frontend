import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../utils/useAxios";
import { AxiosInstance } from "axios";
import { MyData, MyDataSchema } from "../schema/my-data";

const getMyData = async (axiosInstance: AxiosInstance): Promise<MyData> => {
  const response = await axiosInstance.get("/oauth/token/me");
  return MyDataSchema.parse(response.data.content);
};

export const useGetMyData = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["myData"],
    queryFn: () => getMyData(axiosInstance),
  });
};
