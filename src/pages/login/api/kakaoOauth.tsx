import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_RUL;
const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const AUTH_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const grantType = "authorization_code";

const kakaoOauth = async (code: string) => {
  const AUTH_URL = `${AUTH_BASE_URL}/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
  return await axios
    .post(AUTH_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then((res) => {
      const { access_token } = res.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      axios.post(
        `${BASE_URL}/oauth/token/refresh-token/wrap-with-cookie`,
        { refreshToken: res.data.refresh_token },
        { withCredentials: true }
      );
      return res.data.access_token;
    })
    .catch((error: unknown) => {
      console.error("Error fetching access token:", error);
    });
};
export default kakaoOauth;
