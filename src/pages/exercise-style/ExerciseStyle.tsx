import * as S from './style';
import PageForm from '../../shared/ui/page-form/PageForm';
import StyleSelector from '../../entities/exercise-option/ui/StyleSelector';
import { useNavigate } from 'react-router-dom';
import NewHeader from '../../shared/ui/new-header/NewHeader';
import { useProfileEditStore } from '../../features/profile-setting/store/profile-edit-store';
import { useState } from 'react';

export default function ExerciseOption() {
  const navigate = useNavigate();
  const profileEditStore = useProfileEditStore();

  const [localStyle, setLocalStyle] = useState(profileEditStore.styleSelected);
  const [localHabit, setLocalHabit] = useState(profileEditStore.habitSelected);
  const [localGoal, setLocalGoal] = useState(profileEditStore.goalSelected);
  const [localExercise, setLocalExercise] = useState(
    profileEditStore.exerciseSelected
  );

  const allSelected = Boolean(
    localStyle && localHabit && localGoal && localExercise
  );

  const handleSubmit = () => {
    if (allSelected) {
      if (localStyle) {
        profileEditStore.setStyleSelected(localStyle);
      }
      if (localHabit) {
        profileEditStore.setHabitSelected(localHabit);
      }
      if (localGoal) {
        profileEditStore.setGoalSelected(localGoal);
      }
      if (localExercise) {
        profileEditStore.setExerciseSelected(localExercise);
      }
      navigate('/profile-setting');
    }
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <NewHeader title="프로필 입력" onClickBack={onClickBack} isBackBtn />
        <S.StyleH1>나의 운동 스타일을 골라주세요</S.StyleH1>
        <S.SelectorContainer>
          <StyleSelector
            title="운동할 때 주로 누구랑?"
            options={[
              {
                label: '소규모형',
                src:
                  localStyle === 'SMALL'
                    ? '/svg/companionStyle_small_white.svg'
                    : '/svg/companionStyle_small_main.svg',
                value: 'SMALL',
              },
              {
                label: '그룹형',
                src:
                  localStyle === 'GROUP'
                    ? '/svg/companionStyle_group_white.svg'
                    : '/svg/companionStyle_group_main.svg',
                value: 'GROUP',
              },
            ]}
            selectedOption={localStyle}
            setSelectedOption={(option: string) =>
              setLocalStyle(option as 'SMALL' | 'GROUP' | null)
            }
          />

          <StyleSelector
            title="운동할 때 나는 평소?"
            options={[
              {
                label: '의욕만렙형',
                src:
                  localHabit === 'EAGER'
                    ? '/svg/fitnessEagerness_eager_white.svg'
                    : '/svg/fitnessEagerness_eager_main.svg',
                value: 'EAGER',
              },
              {
                label: '귀차니즘형',
                src:
                  localHabit === 'LAZY'
                    ? '/svg/fitnessEagerness_lazy_white.svg'
                    : '/svg/fitnessEagerness_lazy_main.svg',
                value: 'LAZY',
              },
            ]}
            selectedOption={localHabit}
            setSelectedOption={(option: string) =>
              setLocalHabit(option as 'EAGER' | 'LAZY' | null)
            }
          />

          <StyleSelector
            title="나의 운동 목적은?"
            options={[
              {
                label: '헬스헬스 벌크업',
                src:
                  localGoal === 'BULK_UP'
                    ? '/svg/fitnessObjective_bulkUp_white.svg'
                    : '/svg/fitnessObjective_bulkUp_main.svg',
                value: 'BULK_UP',
              },
              {
                label: '러닝러닝 유산소',
                src:
                  localGoal === 'RUNNING'
                    ? '/svg/fitnessObjective_jogging_white.svg'
                    : '/svg/fitnessObjective_jogging_main.svg',
                value: 'RUNNING',
              },
            ]}
            selectedOption={localGoal}
            setSelectedOption={(option: string) =>
              setLocalGoal(option as 'BULK_UP' | 'RUNNING' | null)
            }
          />

          <StyleSelector
            title="주로 하고 있는 운동은?"
            options={[
              {
                label: '고강도 운동 위주',
                src:
                  localExercise === 'HIGH_STRESS'
                    ? '/svg/fitnessKind_highStress_white.svg'
                    : '/svg/fitnessKind_highStress_main.svg',
                value: 'HIGH_STRESS',
              },
              {
                label: '기능성 피트니스 위주',
                src:
                  localExercise === 'FUNCTIONAL'
                    ? '/svg/fitnessKind_functional_white.svg'
                    : '/svg/fitnessKind_functional_main.svg',
                value: 'FUNCTIONAL',
              },
            ]}
            selectedOption={localExercise}
            setSelectedOption={(option: string) =>
              setLocalExercise(option as 'HIGH_STRESS' | 'FUNCTIONAL' | null)
            }
          />
        </S.SelectorContainer>
        <S.NextBtn disabled={!allSelected} onClick={handleSubmit}>
          저장
        </S.NextBtn>
      </S.Container>
    </PageForm>
  );
}
