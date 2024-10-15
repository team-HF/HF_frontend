import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const grantType = "authorization_code";

const kakaoOauth = async (code: string) => {
  try {
    const AUTH_URL = `${KAKAO_BASE_URL}/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
    const getTokenResult = await axios.post(AUTH_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    const { access_token, refreshToken } = getTokenResult.data;
    sessionStorage.setItem("accessToken", access_token);
    sessionStorage.setItem("refreshToken", refreshToken);
    const getUserInfoResult = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const { email, name } = getUserInfoResult.data.kakao_account;
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("name", name);
  } catch (error) {
    console.error("Kakao Oauth error:", error);
    alert("Failed to authenticate with Kakao. Please try again.");
  }
};

export default kakaoOauth;
