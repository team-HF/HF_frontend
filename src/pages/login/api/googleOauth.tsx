import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const APIS_URL = import.meta.env.VITE_GOOGLE_APIS_URL;
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const CLIENT_PASSWORD = import.meta.env.VITE_GOOGLE_CLIENT_PASSWORD;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

const googleOauth = async(code: string) => {
  return await axios
    .post(APIS_URL, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_PASSWORD,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    })
    .then((res) => {
      const { access_token } = res.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
      axios.post(
        `${BASE_URL}/oauth/token/refresh-token/wrap-with-cookie`,
        { refreshToken: res.data.refresh_token },
        { withCredentials: true }
      );
    })
    .catch((error: unknown) => {
      console.error("Error fetching access token:", error);
    });
};

export default googleOauth;
