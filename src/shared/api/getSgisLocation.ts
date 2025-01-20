import axios from "axios";
import { Location } from "../types/user";

export const getSgisLocation = async (cd: string, fullCd: string) => {
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
    const locations = result.data.result;
    const selectedLocation = locations.filter(
      (location: Location) => location.cd === fullCd
    );
    return selectedLocation[0];
  } catch (error) {
    console.error("Error getting location data", error);
    throw error;
  }
};
