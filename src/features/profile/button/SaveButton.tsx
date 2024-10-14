import { useParams } from "react-router-dom";
import MediumButton from "../../../shared/ui/medium-button/MediumButton";
import { useProfileStore } from "../store/profile-store";
import { useAxios } from "../../../shared/utils/useAxios";

type SaveButtonProps = {
  disabled: boolean;
};
export default function SaveButton({ disabled }: SaveButtonProps) {
  const { axiosInstance } = useAxios();

  const {
    fitnessLevel,
    companionStyle,
    fitnessEagerness,
    fitnessObjective,
    fitnessKind,
  } = useParams();

  const accessToken = sessionStorage.getItem("accessToken");
  const id = sessionStorage.getItem("id");
  const name = sessionStorage.getItem("name");

  const { image, nickname, birth, sex, cd1, cd2, cd3, introduction } =
    useProfileStore();

  const joinMembership = async () => {
    const formData = new FormData();
    const formEntries: [string, string | Blob][] = [
      ["id", id as string],
      ["name", name as string],
      ["nickname", nickname as string],
      ["birthDate", birth as string],
      ["gender", sex as string],
      ["cd1", cd1 as string],
      ["cd2", cd2 as string],
      ["cd3", cd3 as string],
      ["introduction", introduction as string],
      ["fitnessLevel", fitnessLevel as string],
      ["companionStyle", companionStyle as string],
      ["fitnessEagerness", fitnessEagerness as string],
      ["fitnessObjective", fitnessObjective as string],
      ["fitnessKind", fitnessKind as string],
    ];
    formEntries.forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (image) {
      formData.append("image", image);
    }
    try {
      const formData = new FormData();
      const response = await axiosInstance.post("/your-endpoint", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
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
