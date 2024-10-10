import LevelSelector from '../../entities/exercise-option/ui/LevelSelector';
import StyleSelector from '../../entities/exercise-option/ui/StyleSelector';
import * as S from './style';
import { useOptionStore } from '../../features/exercise-option/store/exercise-option-store';
import InformationModal from '../../entities/exercise-option/ui/InformationModal';
import { useEffect, useState } from 'react';
import NextButton from '../../features/exercise-option/button/NextButton';

export default function MyPage() {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleModalOpen = () => {
    setIsShowModal(true);
  };
  const handleModalClose = () => {
    setIsShowModal(false);
  };
  const handleModalClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsShowModal(false);
    }
  };

  //모달 오픈 시 외부 스크롤 방지
  useEffect(() => {
    const body = document.body;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isShowModal) {
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    }
    return () => {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    };
  }, [isShowModal]);

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
    <S.Container>
      <S.ProfileContainer>
        <S.StyleH1>프로필 입력</S.StyleH1>
      </S.ProfileContainer>
      <LevelSelector onOpen={handleModalOpen} />
      <S.StyleH1>나의 운동 스타일을 골라주세요</S.StyleH1>
      <S.SelectorContainer>
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
      </S.SelectorContainer>

      <NextButton disabled={!allSelected} />
      {isShowModal && (
        <S.ModalContainer onClick={handleModalClickOutside}>
          <InformationModal onClose={handleModalClose} />
        </S.ModalContainer>
      )}
    </S.Container>
  );
}
