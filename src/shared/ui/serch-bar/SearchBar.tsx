import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useSearchValueStore } from "../../store/search-value-store";
import { useLocationStore } from "../../store/location-store";

interface SearchBarProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult?: React.Dispatch<React.SetStateAction<boolean>>;
  $value: string;
  setKeyWord: (word: string) => void;
}

const SearchBar = ({ closeModal, $value, setKeyWord }: SearchBarProps) => {
  const navigate = useNavigate();

  const { keyWord, fitnessLevel, fitnessStyle } = useSearchValueStore();
  const { cd1, cd2, cd3 } = useLocationStore();

  const params = {
    ...(keyWord && { keyWord }),
    ...(fitnessLevel && { fitnessLevel }),
    ...(fitnessStyle.length && {
      fitnessStyle: fitnessStyle.map((item) => item.id).join(","),
    }),
    ...(cd1 && { cd1 }),
    ...(cd2 && { cd2: cd2.slice(2) }),
    ...(cd3 && { cd3: cd3.slice(5) }),
  };


  const queryString = new URLSearchParams(params).toString();

  // console.log(queryString);
  console.log(decodeURIComponent(queryString));

  return (
    <S.Container>
      <S.IconBtn onClick={() => closeModal(false)}>
        <S.ArrowIcon src="/svg/arrow-down.svg" />
      </S.IconBtn>
      <S.InputContainer>
        <S.SearchInput
          placeholder="운동 스타일, 키워드로 검색"
          value={$value}
          onChange={(ev) => setKeyWord(ev.target.value)}
        />
        <S.IconBtn onClick={() => navigate("search-result")}>
          <S.SearchIcon src="/svg/search-icon.svg" />
        </S.IconBtn>
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
