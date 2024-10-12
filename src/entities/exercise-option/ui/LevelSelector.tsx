import * as S from "./level-selector.style";
import { useOptionStore } from "../../../features/exercise-option/store/exercise-option-store";

type modalProps = {
  onOpen: () => void;
};
export default function LevelSelector({ onOpen }: modalProps) {
  const { levelSelected, setLevelSelected } = useOptionStore();
  const options = [
    { label: "고수", value: "ADVANCED" },
    { label: "새싹", value: "BEGINNER" },
  ];

  return (
    <S.Container>
      <S.StyleP>나의 운동 레벨은 어느 정도인가요?</S.StyleP>
      <S.LevelSelectorContainer>
        {options.map((option) => (
          <S.LevelSelectorButton
            key={option.label}
            selected={levelSelected === option.value}
            onClick={() => setLevelSelected(option.value)}
          >
            {option.label}
          </S.LevelSelectorButton>
        ))}
        <S.InformationIcon
          src="/svg/information-icon.svg"
          alt="information icon"
          onClick={onOpen}
        />
      </S.LevelSelectorContainer>
    </S.Container>
  );
}
