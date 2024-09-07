import Button from '../../shared/ui/button/Button';
import LevelSelector from './components/LevelSelector';
import StyleSelector from './components/StyleSelector';
import * as s from './styles';
import { useOptionStore } from '../../features/my-page/store/option-store';

export default function MyPage() {
  const {
    levelSelected,
    styleSelected,
    setStyleSelected,
    habitSelected,
    setHabitSelected,
    goalSelected,
    setGoalSelected,
    exerciseSelected,
    setExerciseSelected,
  } = useOptionStore();

  const allSelected =
    levelSelected &&
    styleSelected &&
    habitSelected &&
    goalSelected &&
    exerciseSelected;

  return (
    <s.Container>
      <s.StyleProfileContainer>
        <s.StyleH1>프로필 입력</s.StyleH1>
      </s.StyleProfileContainer>

      <LevelSelector />

      <s.StyleH1>나의 운동 스타일을 골라주세요</s.StyleH1>
      <s.StyleSelectorContainer>
        <StyleSelector
          title="운동할 때 주로 누구랑?"
          options={[
            { label: '소규모형', emoji: '🙂' },
            { label: '그룹형', emoji: '😉🙂😊' },
          ]}
          selectedOption={styleSelected}
          setSelectedOption={setStyleSelected}
        />

        <StyleSelector
          title="운동할 때 나는 평소?"
          options={[
            { label: '의욕만렙형', emoji: '💪' },
            { label: '귀차니즘형', emoji: '💤' },
          ]}
          selectedOption={habitSelected}
          setSelectedOption={setHabitSelected}
        />

        <StyleSelector
          title="나의 운동 목적은?"
          options={[
            { label: '헬스헬스\n무조건 벌크업!', emoji: '🏋️‍♂️' },
            { label: '러닝러닝\n뛰어야 운동이지!', emoji: '🏃‍♂️' },
          ]}
          selectedOption={goalSelected}
          setSelectedOption={setGoalSelected}
        />

        <StyleSelector
          title="주로 하고 있는 운동은?"
          options={[
            { label: '고강도 운동 위주', emoji: '🔥' },
            { label: '기능성 피트니스 위주', emoji: '🤸‍♂️' },
          ]}
          selectedOption={exerciseSelected}
          setSelectedOption={setExerciseSelected}
        />
      </s.StyleSelectorContainer>

      <Button color="main" text="다음" disabled={!allSelected} />
    </s.Container>
  );
}
