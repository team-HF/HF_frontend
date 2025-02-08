import * as S from "./style";
import SearchBar from "../../../shared/ui/serch-bar/SearchBar";
import LocationSelectBar from "../../../shared/ui/location-select-bar/LocationSelectBar";
import { useSearchValueStore } from "../../../shared/store/search-value-store";
import { fitnessStyles } from "../../../shared/constants/fitness-style";
import { useLocationStore } from "../../../shared/store/location-store";

interface SearchModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ closeModal }: SearchModalProps) => {
  const {
    keyWord,
    setKeyWord,
    fitnessLevel,
    setFitnessLevel,
    fitnessStyle,
    setFitnessStyle,
  } = useSearchValueStore();

  const { cd1, cd2, cd3 } = useLocationStore();

  console.log(
    "keyWord",
    keyWord,
    "fitnessLevel",
    fitnessLevel,
    "fitnessStyle",
    fitnessStyle,
    "cd1",
    cd1,
    "cd2",
    cd2,
    "cd3",
    cd3
  );

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
          $value={keyWord}
          setKeyWord={setKeyWord}
        />
        <S.OptionContainer>
          <S.TitleContainer>
            <S.Title>최근 검색</S.Title>
            <S.DeleteBtn onClick={() => {}}>전체 삭제</S.DeleteBtn>
          </S.TitleContainer>
          <S.TagContainer>
            <S.WordTag>
              검색단어1
              <S.RemoveIcon src="public/svg/close-icon.svg" />
            </S.WordTag>
            <S.WordTag>
              검색단어1
              <S.RemoveIcon src="public/svg/close-icon.svg" />
            </S.WordTag>
            <S.WordTag>
              검색단어1
              <S.RemoveIcon src="public/svg/close-icon.svg" />
            </S.WordTag>
            <S.WordTag>
              검색단어1
              <S.RemoveIcon src="public/svg/close-icon.svg" />
            </S.WordTag>
            <S.WordTag>
              검색단어1
              <S.RemoveIcon src="public/svg/close-icon.svg" />
            </S.WordTag>
          </S.TagContainer>
        </S.OptionContainer>
        <S.OptionContainer>
          <LocationSelectBar />
        </S.OptionContainer>
        <S.OptionContainer>
          <S.Title>운동 레벨</S.Title>
          <S.Box>
            <S.GenderBtn
              selected={fitnessLevel === "ADVANCED"}
              onClick={() => setFitnessLevel("ADVANCED")}
            >
              고수
            </S.GenderBtn>
            <S.GenderBtn
              selected={fitnessLevel === "BEGINNER"}
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
