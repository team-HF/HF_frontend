import Cookies from "js-cookie";
import axios, { AxiosInstance } from "axios";

const kakaoOauth = async (code: string, axiosInstance: AxiosInstance) => {
  try {
    await axiosInstance.get("/oauth/code/kakao", {
      params: { code: code },
      withCredentials: true,
    });
    const isNewMember = Cookies.get("is_new_member") === "true";
    return isNewMember;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Kakao Oauth response error:", error.response);
      } else if (error.request) {
        console.error("Kakao Oauth no response:", error.request);
      } else {
        console.error("Kakao Oauth error:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
  }
};

export default kakaoOauth;
