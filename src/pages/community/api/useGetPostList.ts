import axios from "axios";

const getPostList = async (currentPage: number) => {
  try {
    const response = await axios.get(`/hf/list`, {
      params: {
        page: currentPage,
        size: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Getting community post", error);
    throw error;
  }
};

export default getPostList;
