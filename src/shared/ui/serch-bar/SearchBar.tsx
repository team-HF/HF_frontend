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

  const { keyword, fitnessLevels, fitnessStyle } = useSearchValueStore();
  const { cd1, cd2, cd3 } = useLocationStore();

  const fitnessEntries = fitnessStyle.reduce<Record<string, string>>(
    (acc, item) => {
      const key = item.type;
      acc[key] = acc[key] ? `${acc[key]},${item.id}` : `${item.id}`;
      return acc;
    },
    {}
  );

  const params = {
    ...(keyword && { keyword }),
    ...(fitnessLevels && { fitnessLevels }),
    ...(fitnessStyle.length && fitnessEntries),
    ...(cd1 && { cd1 }),
    ...(cd2 && { cd2: cd2.slice(2) }),
    ...(cd3 && { cd3: cd3.slice(5) }),
  };

  const handleNavigate = () => {
    const queryString = new URLSearchParams(params).toString();
    const currentPath = window.location.pathname;
    const newQuery = decodeURIComponent(queryString);

    if (currentPath === "/search-result") {
      closeModal(false);
      navigate(`?${newQuery}`, { replace: true });
    } else {
      navigate(`search-result?${newQuery}`);
    }
  };

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
        <S.IconBtn type="button" id="fuck_you" onClick={handleNavigate}>
          <S.SearchIcon src="/svg/search-icon.svg" />
        </S.IconBtn>
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
