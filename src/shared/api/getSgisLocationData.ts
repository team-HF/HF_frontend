import axios from "axios";

export const getSgisLocationData = async (cd: string | null) => {
  try {
    const URL = import.meta.env.VITE_SGIS_LOCATION_URL;
    const accessToken = sessionStorage.getItem("sgisAccessToken");
    const params: { accessToken: string; cd?: string } = {
      accessToken: accessToken!,
    };
    if (cd) {
      params.cd = cd;
    }
    const result = await axios.get(URL, { params });
    return result.data.result || [];
  } catch (error) {
    console.error("Error getting location data", error);
    throw error;
  }
};
