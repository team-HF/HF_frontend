import * as s from './level-selector.style';
import { useOptionStore } from '../../../features/exercise-option/store/option-store';

type modalProps = {
  onOpen: () => void;
};
export default function LevelSelector({ onOpen }: modalProps) {
  const { levelSelected, setLevelSelected } = useOptionStore();
  const options = [{ label: '고수' }, { label: '새싹' }];

  return (
    <s.Container>
      <s.StyleP>나의 운동 레벨은 어느 정도인가요?</s.StyleP>
      <s.LevelSelectorContainer>
        {options.map((option) => (
          <s.LevelSelectorButton
            key={option.label}
            selected={levelSelected === option.label}
            onClick={() => setLevelSelected(option.label)}
          >
            {option.label}
          </s.LevelSelectorButton>
        ))}
        <s.InformationIcon
          src="/svg/information-icon.svg"
          alt="information icon"
          onClick={onOpen}
        />
      </s.LevelSelectorContainer>
    </s.Container>
  );
}
