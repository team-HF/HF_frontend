import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const grantType = "authorization_code";

const kakaoOauth = async (code: string) => {
  try {
    if (!KAKAO_BASE_URL || !CLIENT_ID || !REDIRECT_URI) {
      throw new Error("Missing environment variables for Kakao OAuth.");
    }

    const AUTH_URL = `${KAKAO_BASE_URL}/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const getTokenResult = await axios.post(AUTH_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    const { access_token, refresh_token } = getTokenResult.data;
    sessionStorage.setItem("accessToken", access_token);
    sessionStorage.setItem("refreshToken", refresh_token);

    const getUserInfoResult = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { kakao_account } = getUserInfoResult.data || {};
    if (kakao_account) {
      const { email, name } = kakao_account;
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("name", name);
    } else {
      console.error("Failed to retrieve Kakao account information.");
    }
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
