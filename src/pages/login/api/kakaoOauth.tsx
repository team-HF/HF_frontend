import axios from "axios";

const OAUTH_URL = import.meta.env.VITE_KAKAO_OAUTH_URL;
const API_USER_INFO_URL = import.meta.env.VITE_KAKAO_API_USER_INFO_URL;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const grantType = "authorization_code";

const kakaoOauth = async (code: string) => {
  try {
    const API_TOKEN_URL = `${OAUTH_URL}/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const getTokenResult = await axios.post(API_TOKEN_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    const { access_token, refresh_token } = getTokenResult.data;
    sessionStorage.setItem("accessToken", access_token);
    sessionStorage.setItem("refreshToken", refresh_token);
    const getUserInfoResult = await axios.get(API_USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const { email, name } = getUserInfoResult.data.kakao_account;
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("name", name);
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
    alert("Failed to authenticate with Kakao. Please try again.");
  }
};

export default kakaoOauth;
