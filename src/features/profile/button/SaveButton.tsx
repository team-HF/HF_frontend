import Cookies from "js-cookie";
import { useProfileStore } from "../store/profile-store";
import { useAxios } from "../../../shared/utils/useAxios";
import { useGetParams } from "../../../shared/utils/useGetParams";
import { useNavigate } from "react-router-dom";
import axios, { AxiosInstance } from "axios";
import styled from "styled-components";
import { theme } from "../../../app/theme";
import { useLocationStore } from "../../../shared/store/location-store";

type SaveButtonProps = {
  disabled: boolean;
};

interface Spec {
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  title: string;
  description: string;
}

type TUserData = {
  profileImageFileExtension: string | null;
  id: string | null;
  name: string | null;
  nickname: string | null;
  birthDate: string | null;
  gender: string | null;
  cd1: string | null;
  cd2: string | null;
  cd3: string | null;
  introduction: string | null;
  fitnessLevel: string | null;
  companionStyle: string | null;
  fitnessEagerness: string | null;
  fitnessObjective: string | null;
  fitnessKind: string | null;
  specs: Spec[];
};

const postNewMember = async (
  axiosInstance: AxiosInstance,
  userData: TUserData
) => {
  const accessToken = Cookies.get("access_token");
  try {
    const response = await axiosInstance.post("/hf/members", userData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const uploadImageFile = async (
  axiosInstance: AxiosInstance,
  url: string,
  image: File
) => {
  const accessToken = Cookies.get("access_token");
  const response = await axiosInstance.put(url, image, {
    headers: {
      "Content-Type": image?.type,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default function SaveButton({ disabled }: SaveButtonProps) {
  const { axiosInstance } = useAxios();
  const navigate = useNavigate();

  const companionStyle = useGetParams("companionStyle");
  const fitnessEagerness = useGetParams("fitnessEagerness");
  const fitnessObjective = useGetParams("fitnessObjective");
  const fitnessKind = useGetParams("fitnessKind");

  const id = Cookies.get("email") || "";
  const name = Cookies.get("name") || "";

  const {
    image,
    nickname,
    dateYear,
    dateMonth,
    dateDay,
    gender,
    introduction,
  } = useProfileStore();

  const { cd1, cd2, cd3 } = useLocationStore();

  const joinMembership = async () => {
    const imageFileExtension = image?.type.split("/")[1] || null;
    const requestData: TUserData = {
      profileImageFileExtension: imageFileExtension,
      id,
      name,
      nickname,
      birthDate: `${dateYear}-${dateMonth}-${dateDay}`,
      gender,
      cd1,
      cd2: cd2?.slice(2) || null,
      cd3: cd3?.slice(5) || null,
      introduction,
      fitnessLevel: "BEGINNER",
      companionStyle,
      fitnessEagerness,
      fitnessObjective,
      fitnessKind,
      specs: [],
    };
    try {
      const newMemberResponse = await postNewMember(axiosInstance, requestData);
      if (newMemberResponse.content.profileImageUploadUrl && image) {
        await uploadImageFile(
          axiosInstance,
          newMemberResponse.content.profileImageUploadUrl,
          image
        );
      }
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.errorCode === 201) {
          console.error("This account is already exists.", error);
        } else if (error.response?.data.errorCode === 101) {
          console.error("This is an unauthorized access.", error);
        }
      }
    }
  };
  return (
    <Btn disabled={disabled} onClick={() => joinMembership()}>
      완료
    </Btn>
  );
}

const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.main};
  margin-top: 40px;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  font-weight: 600;
  &:disabled {
    background-color: #f2f2f2;
    color: #868e96;
  }
`;
