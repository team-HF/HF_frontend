import axios from "axios";

const useGetUserData = async () => {
  try {
    const response = await axios.get("oauth/token/me");
    return response.data;
  } catch (error) {
    console.error("Error getting user data", error);
  }
};

export default useGetUserData;
