import { useNavigate } from "react-router-dom";
import MediumButton from "../../../shared/ui/medium-button/MediumButton";
import { useOptionStore } from "../store/exercise-option-store";

type NextButtonProps = {
  disabled: boolean;
};
export default function NextButton({ disabled }: NextButtonProps) {
  const {
    levelSelected,
    styleSelected,
    habitSelected,
    goalSelected,
    exerciseSelected,
  } = useOptionStore();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(
      `/register/profile?fitnessLevel=${levelSelected}&companionStyle=${styleSelected}&fitnessEagerness=${habitSelected}&fitnessObjective=${goalSelected}&fitnessKind=${exerciseSelected}`
    );
  };
  return (
    <div>
      <MediumButton
        text="임시 버튼"
        color="black"
        onClick={onClick}
        backgroundColor="gray"
        border="1px solid black"
        disabled={disabled}
      />
    </div>
  );
}
