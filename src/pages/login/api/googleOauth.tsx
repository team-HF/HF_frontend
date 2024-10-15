import axios from "axios";

const API_TOKEN_URL = import.meta.env.VITE_GOOGLE_API_TOKEN_URL;
const API_USER_INFO_URL = import.meta.env.VITE_GOOGLE_API_USER_INFO_URL;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const CLIENT_PASSWORD = import.meta.env.VITE_GOOGLE_CLIENT_PASSWORD;

const googleOauth = async (code: string) => {
  try {
    const getTokenResult = await axios.post(API_TOKEN_URL, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_PASSWORD,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    });
    sessionStorage.setItem("access_token", getTokenResult.data.access_token);
    sessionStorage.setItem("refresh_token", getTokenResult.data.refresh_token);
    const getUserDataResult = await axios.get(API_USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${getTokenResult.data.access_token}`,
      },
    });
    sessionStorage.setItem("id", getUserDataResult.data.email);
    const userName =
      getUserDataResult.data.given_name + getUserDataResult.data.family_name;
    sessionStorage.setItem("name", userName);
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
