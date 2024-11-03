import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const googleOauth = async (code: string, axiosInstance: AxiosInstance) => {
  try {
    await axiosInstance("/oauth/code/google", {
      params: {
        params: { code: code },
        withCredentials: true,
      },
    });
    const isNewMember = Cookies.get("is_new_member") === "true";
    return isNewMember;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Google Oauth response error:", error.response);
      } else if (error.request) {
        console.error("Google Oauth no response:", error.request);
      } else {
        console.error("Google Oauth error:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    alert("Failed to authenticate with Google. Please try again.");
  }
};

export default googleOauth;
