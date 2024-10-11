import * as S from './level-selector.style';
import { useOptionStore } from '../../../features/exercise-option/store/exercise-option-store';

type modalProps = {
  onOpen: () => void;
};
export default function LevelSelector({ onOpen }: modalProps) {
  const { levelSelected, setLevelSelected } = useOptionStore();
  const options = [{ label: '고수' }, { label: '새싹' }];

  return (
    <S.Container>
      <S.StyleP>나의 운동 레벨은 어느 정도인가요?</S.StyleP>
      <S.LevelSelectorContainer>
        {options.map((option) => (
          <S.LevelSelectorButton
            key={option.label}
            selected={levelSelected === option.label}
            onClick={() => setLevelSelected(option.label)}
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
