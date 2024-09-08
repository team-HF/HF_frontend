import * as s from './level-selector.style';
import { useOptionStore } from '../../../features/my-page/store/option-store';

export default function LevelSelector() {
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
        />
      </s.LevelSelectorContainer>
    </s.Container>
  );
}
