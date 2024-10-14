import axios from "axios";

export const getSgisApiAccessToken = async () => {
  const KEY = import.meta.env.VITE_SGIS_CONSUMER_KEY;
  const SECRET = import.meta.env.VITE_SGIS_CONSUMER_SECRET;
  const URL = import.meta.env.VITE_SGIS_TOKEN_URL;
  const result = await axios.get(URL, {
    params: {
      consumer_key: KEY,
      consumer_secret: SECRET,
    },
  });
  const accessToken = result.data.result.accessToken
  sessionStorage.setItem("sgisAccessToken", accessToken);
};
