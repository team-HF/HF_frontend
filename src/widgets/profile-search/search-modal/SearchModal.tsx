import * as S from "./style";
import SearchBar from "../../../shared/ui/serch-bar/SearchBar";
import LocationSelectBar from "../../../shared/ui/location-select-bar/LocationSelectBar";
import { useSearchValueStore } from "../../../shared/store/search-value-store";
import { fitnessStyles } from "../../../shared/constants/fitness-style";

interface SearchModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ closeModal }: SearchModalProps) => {
  const {
    keyword,
    setKeyWord,
    fitnessLevels,
    setFitnessLevel,
    fitnessStyle,
    setFitnessStyle,
  } = useSearchValueStore();

  const exerciseStyleTags = fitnessStyles.map((style) => (
    <S.ExerciseTag
      key={`exercise_style_tag_${style.id}`}
      selected={
        fitnessStyle.find((item) => item.id === style.id) ? true : false
      }
      onClick={() => setFitnessStyle(style)}
    >
      # {style.content}
    </S.ExerciseTag>
  ));

  return (
    <S.ModalContainer id="search_modal">
      <S.Container id="container">
        <SearchBar
          closeModal={closeModal}
          $value={keyword}
          setKeyWord={setKeyWord}
        />
        <S.OptionContainer>
          <LocationSelectBar />
        </S.OptionContainer>
        <S.OptionContainer>
          <S.Title>운동 레벨</S.Title>
          <S.Box>
            <S.GenderBtn
              selected={fitnessLevels === "ADVANCED"}
              onClick={() => setFitnessLevel("ADVANCED")}
            >
              고수
            </S.GenderBtn>
            <S.GenderBtn
              selected={fitnessLevels === "BEGINNER"}
              onClick={() => setFitnessLevel("BEGINNER")}
            >
              새싹
            </S.GenderBtn>
          </S.Box>
        </S.OptionContainer>
        <S.OptionContainer>
          <S.Title>운동 스타일</S.Title>
          <S.Box>{exerciseStyleTags}</S.Box>
        </S.OptionContainer>
      </S.Container>
    </S.ModalContainer>
  );
};

export default SearchModal;
