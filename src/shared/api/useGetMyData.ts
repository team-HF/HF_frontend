import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/useAxios";
import { AxiosInstance } from "axios";
import { MyData, MyDataSchema } from "../schema/my-data";
import Cookies from "js-cookie";

const getMyData = async (axiosInstance: AxiosInstance): Promise<MyData> => {
  const accessToken = Cookies.get("access_token");
  const response = await axiosInstance.get("/oauth/token/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return MyDataSchema.parse(response.data.content);
};

export const useGetMyData = () => {
  const accessToken = Cookies.get("access_token");
  return useQuery({
    queryKey: ["myData"],
    queryFn: () => getMyData(axiosInstance),
    enabled: !!accessToken,
    retry: false,
  });
};

