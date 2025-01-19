import { useLocationStore } from "../store/location-store";
import { useAxios as Axios } from "../utils/useAxios";
import { useSearchValueStore } from "../store/search-value-store";
import {
  COMPANION_STYLE_MAP,
  FITNESS_EAGERNESS_MAP,
  FITNESS_KIND_MAP,
  FITNESS_LEVEL_MAP,
  FITNESS_OBJECTIVE_MAP,
} from "../constants/fitness-category";

// type MembersSearchRequestParams = {
//   membersSearchRequest: {cd1"?: string;};
//   "membersSearchRequest.
//   "membersSearchRequest.cd2"?: string;
//   "membersSearchRequest.cd3"?: string;
//   "membersSearchRequest.fitnessLevel"?: string;
//   "membersSearchRequest.companionStyle"?: string;
//   "membersSearchRequest.memberSortType": string;
//   keyword?: string;
// };

export const useGetSearchData = () => {
  const { axiosInstance } = Axios();

  const { keyWord, fitnessLevel, fitnessStyle } = useSearchValueStore();
  const { cd1, cd2, cd3 } = useLocationStore();

  const params: MembersSearchRequestParams = {
    membersSearchRequest: { memberSortType: "SCORE" },
  };

  if (cd1) params["membersSearchRequest.cd1"] = cd1;
  if (cd2) params["membersSearchRequest.cd2"] = cd2;
  if (cd3) params["membersSearchRequest.cd3"] = cd3;
  if (fitnessLevel) params["membersSearchRequest.fitnessLevel"] = fitnessLevel;
  if (fitnessStyle.length > 0)
    params["membersSearchRequest.companionStyle"] = fitnessStyle.join(",");
  params["membersSearchRequest.memberSortType"] = "SCORE";

  //   fitnessStyle.forEach((style) => {
  //     if (style.id in COMPANION_STYLE_MAP) {
  //       requestBody.membersSearchRequest.companionStyle = style.id;
  //     } else if (style.id in FITNESS_EAGERNESS_MAP) {
  //     } else if (style.id in FITNESS_OBJECTIVE_MAP) {
  //     } else if (style.id in FITNESS_KIND_MAP) {
  //     } else {
  //       return;
  //     }
  //   });

  try {
    const result = async () => {
      const response = await axiosInstance.get("/hf/search", {
        // params: requestBody,
      });
      return response.data;
    };
    console.log(result);
  } catch (error) {
    console.error("Error searching", error);
    throw error;
  }
};
