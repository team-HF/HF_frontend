import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_RUL;
const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const grantType = "authorization_code";

const kakaoOauth = async (code: string) => {
  const AUTH_URL = `${KAKAO_BASE_URL}/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`;
  await axios
    .post(AUTH_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then(async (res) => {
      const { access_token, refreshToken } = res.data;
      sessionStorage.setItem("accessToken", access_token);
      await axios
        .get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          const { email, name } = res.data.kakao_account;
          console.log(email, name);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("name", name);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          throw error;
        });
      // refresh_token 서버 전송(보류)
      // await axios.post(
      //   `${BASE_URL}/oauth/token/refresh-token/wrap-with-cookie`,
      //   { refreshToken: refreshToken },
      //   { withCredentials: true }
      // );
    })
    .catch((error) => {
      console.error("Error fetching access token:", error);
      throw error;
    });
};

export default kakaoOauth;
