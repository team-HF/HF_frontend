import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTH_BASE_URL = import.meta.env.VITE_GOOGLE_BASE_URL;
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

const googleOauth = () => {
  
  return axios
    .post(AUTH_URL, null, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
    .then((res) => {
      axios.post(
        `${BASE_URL}/oauth/token/refresh-token/wrap-with-cookie`,
        { refreshToken: res.data.refresh_token },
        { withCredentials: true }
      );
      return res;
    })
    .catch((error: unknown) => {
      console.error("Error fetching access token:", error);
    });
};

export default googleOauth;
