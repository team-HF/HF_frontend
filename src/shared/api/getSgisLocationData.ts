import axios from "axios";

export const getSgisLocationData = async (cd: string | null) => {
  const URL = import.meta.env.VITE_SGIS_LOCATION_URL;
  const accessToken = sessionStorage.getItem("sgisAccessToken");
  const params: { accessToken: string; cd?: string } = {
    accessToken: accessToken!,
  };
  if (cd) {
    params.cd = cd;
  }

  try {
    const response = await axios.get(URL, { params });
    if (response.data.errMsg === "Success") {
      return response.data.result;
    } else if (response.data.errMsg === "인증 정보가 존재하지 않습니다") {
      return false;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getting location data", error);
    throw error;
  }
};
