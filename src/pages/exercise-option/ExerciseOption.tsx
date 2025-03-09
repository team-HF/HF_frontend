import * as S from "./style";
import PageForm from "../../shared/ui/page-form/PageForm";
import StyleSelector from "../../entities/exercise-option/ui/StyleSelector";
import { useOptionStore } from "../../features/exercise-option/store/exercise-option-store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NewHeader from "../../shared/ui/new-header/NewHeader";
import Cookies from "js-cookie";

export default function ExerciseOption() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditMode = location.state?.isEditMode;

  const {
    styleSelected,
    setStyleSelected,
    habitSelected,
    setHabitSelected,
    goalSelected,
    setGoalSelected,
    exerciseSelected,
    setExerciseSelected,
  } = useOptionStore();

  useEffect(() => {
    if (isEditMode) {
      sessionStorage.setItem(
        "exerciseStyles",
        JSON.stringify({
          companionStyle: styleSelected,
          fitnessEagerness: habitSelected,
          fitnessObjective: goalSelected,
          fitnessKind: exerciseSelected,
        })
      );
    }
  }, [
    styleSelected,
    habitSelected,
    goalSelected,
    exerciseSelected,
    isEditMode,
  ]);

  const allSelected = Boolean(
    styleSelected && habitSelected && goalSelected && exerciseSelected
  );

  const handleSubmit = () => {
    if (isEditMode) {
      navigate("/profile-setting", { state: { isEditMode } });
    } else {
      navigate(
        `/register/profile?companionStyle=${styleSelected}&fitnessEagerness=${habitSelected}&fitnessObjective=${goalSelected}&fitnessKind=${exerciseSelected}`
      );
    }
  };

  useEffect(() => {
    const isNewMember = Cookies.get("is_new_member");
    if (isNewMember !== "true") {
      navigate("/not-found");
    }
  }, []);

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <NewHeader
          title={"프로필 입력"}
          isBackBtn={true}
          onClickBack={() => navigate("/agreement")}
        />
        <S.StyleH1>나의 운동 스타일을 골라주세요</S.StyleH1>
        <S.SelectorContainer>
          <StyleSelector
            title="운동할 때 주로 누구랑?"
            options={[
              {
                label: "소규모형",
                src:
                  styleSelected === "SMALL"
                    ? "/svg/companionStyle_small_white.svg"
                    : "/svg/companionStyle_small_main.svg",
                value: "SMALL",
              },
              {
                label: "그룹형",
                src:
                  styleSelected === "GROUP"
                    ? "/svg/companionStyle_group_white.svg"
                    : "/svg/companionStyle_group_main.svg",
                value: "GROUP",
              },
            ]}
            selectedOption={styleSelected}
            setSelectedOption={setStyleSelected}
          />

          <StyleSelector
            title="운동할 때 나는 평소?"
            options={[
              {
                label: "의욕만렙형",
                src:
                  habitSelected === "EAGER"
                    ? "/svg/fitnessEagerness_eager_white.svg"
                    : "/svg/fitnessEagerness_eager_main.svg",
                value: "EAGER",
              },
              {
                label: "귀차니즘형",
                src:
                  habitSelected === "LAZY"
                    ? "/svg/fitnessEagerness_lazy_white.svg"
                    : "/svg/fitnessEagerness_lazy_main.svg",
                value: "LAZY",
              },
            ]}
            selectedOption={habitSelected}
            setSelectedOption={setHabitSelected}
          />

          <StyleSelector
            title="나의 운동 목적은?"
            options={[
              {
                label: "헬스헬스 벌크업",
                src:
                  goalSelected === "BULK_UP"
                    ? "/svg/fitnessObjective_bulkUp_white.svg"
                    : "/svg/fitnessObjective_bulkUp_main.svg",
                value: "BULK_UP",
              },
              {
                label: "러닝러닝 유산소",
                src:
                  goalSelected === "RUNNING"
                    ? "/svg/fitnessObjective_jogging_white.svg"
                    : "/svg/fitnessObjective_jogging_main.svg",
                value: "RUNNING",
              },
            ]}
            selectedOption={goalSelected}
            setSelectedOption={setGoalSelected}
          />

          <StyleSelector
            title="주로 하고 있는 운동은?"
            options={[
              {
                label: "고강도 운동 위주",
                src:
                  exerciseSelected === "HIGH_STRESS"
                    ? "/svg/fitnessKind_highStress_white.svg"
                    : "/svg/fitnessKind_highStress_main.svg",
                value: "HIGH_STRESS",
              },
              {
                label: "기능성 피트니스 위주",
                src:
                  exerciseSelected === "FUNCTIONAL"
                    ? "/svg/fitnessKind_functional_white.svg"
                    : "/svg/fitnessKind_functional_main.svg",
                value: "FUNCTIONAL",
              },
            ]}
            selectedOption={exerciseSelected}
            setSelectedOption={setExerciseSelected}
          />
        </S.SelectorContainer>
        <S.NextBtn disabled={!allSelected} onClick={handleSubmit}>
          {isEditMode ? "수정완료" : "다음"}
        </S.NextBtn>
      </S.Container>
    </PageForm>
  );
}
