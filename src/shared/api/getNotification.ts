import Cookies from "js-cookie";
import axiosInstance from "../utils/useAxios";

export const getNotification = async (currentPage: number) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.get("/hf/notification/list", {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { page: currentPage, size: 10 },
    });

    const alarms = response.data.content.notificationResponseList;

    if (!Array.isArray(alarms)) {
      throw new Error("Invalid data: 'content' is not an array.");
    }

    const totalPages =
      alarms.length > 0 ? response.data.content.totalPageSize : currentPage;

    return {
      totalPages,
      notificationList: alarms,
    };
  } catch (error) {
    console.error("Error fetching notification data : ", error);
  }
};
