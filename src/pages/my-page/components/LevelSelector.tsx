import * as s from './level-selector.style';
import { useOptionStore } from '../../../features/my-page/store/option-store';

export default function LevelSelector() {
  const { levelSelected, setLevelSelected } = useOptionStore();

  const options = [{ label: '고수' }, { label: '새싹' }];

  return (
    <s.Container>
      <s.StyleP>나의 운동 레벨은 어느 정도인가요?</s.StyleP>
      <s.StyleLevelSelectorContainer>
        {options.map((option) => (
          <s.StyleLevelSelectorButton
            key={option.label}
            selected={levelSelected === option.label}
            onClick={() => setLevelSelected(option.label)}
          >
            {option.label}
          </s.StyleLevelSelectorButton>
        ))}
        <s.StyleInformationIcon
          src="/svg/information-icon.svg"
          alt="information icon"
        />
      </s.StyleLevelSelectorContainer>
    </s.Container>
  );
}
