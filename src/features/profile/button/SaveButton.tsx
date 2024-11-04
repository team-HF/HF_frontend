import MediumButton from "../../../shared/ui/medium-button/MediumButton";
import Cookies from "js-cookie";
import { useProfileStore } from "../store/profile-store";
import { useAxios } from "../../../shared/utils/useAxios";
import { useGetParams } from "../../../shared/utils/useGetParams";
import { useNavigate } from "react-router-dom";
import axios, { AxiosInstance } from "axios";

type SaveButtonProps = {
  disabled: boolean;
};

const postNewMember = async (
  axiosInstance: AxiosInstance,
  formData: FormData
) => {
  const response = await axiosInstance.post("/hf/members", formData);
  return response.data;
};

const uploadImageFile = async (url: string, image: File) => {
  const response = await axios.put(url, image, {
    headers: {
      "Content-Type": image?.type,
    },
  });
  return response.data;
};

export default function SaveButton({ disabled }: SaveButtonProps) {
  const { axiosInstance } = useAxios();
  const navigate = useNavigate();

  const fitnessLevel = useGetParams("fitnessLevel");
  const companionStyle = useGetParams("companionStyle");
  const fitnessEagerness = useGetParams("fitnessEagerness");
  const fitnessObjective = useGetParams("fitnessObjective");
  const fitnessKind = useGetParams("fitnessKind");

  const id = Cookies.get("email");
  const name = Cookies.get("name");

  const {
    image,
    nickname,
    birthDate,
    gender,
    cd1,
    cd2,
    cd3,
    introduction,
    specs,
  } = useProfileStore();

  const joinMembership = async () => {
    const formData = new FormData();
    const formEntries = {
      profileImageFileExtension: image?.type || null,
      id,
      name,
      nickname,
      birthDate,
      gender,
      cd1,
      cd2,
      cd3,
      introduction,
      fitnessLevel,
      companionStyle,
      fitnessEagerness,
      fitnessObjective,
      fitnessKind,
    };
    Object.entries(formEntries).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });
    if (specs.length) {
      const transformedSpecs = specs.map((spec) => {
        if (spec.spec.title && spec.spec.startDate) {
          return {
            startDate: spec.spec.startDate,
            endDate: spec.spec.endDate || null,
            isCurrent: !spec.spec.endDate,
            title: spec.spec.title,
            description: spec.spec.description,
          };
        }
      });
      formData.append("specs", JSON.stringify(transformedSpecs));
    }
    try {
      const newMemberResponse = await postNewMember(axiosInstance, formData);
      if (newMemberResponse.statusCode === 201) {
        if (newMemberResponse.profileImageUploadUrl && image) {
          await uploadImageFile(newMemberResponse.profileImageUploadUrl, image);
        }
        if (confirm("축하합니다! 회원가입을 완료하셨습니다.") === true) {
          navigate("/");
        }
      }
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
    <div>
      <MediumButton
        text="임시 버튼"
        color="black"
        backgroundColor="gray"
        border="1px solid black"
        disabled={disabled}
        onClick={() => joinMembership()}
      />
    </div>
  );
}
