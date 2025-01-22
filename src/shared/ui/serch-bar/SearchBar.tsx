import * as S from "./style";

interface SearchBarProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchResult?: React.Dispatch<React.SetStateAction<boolean>>;
  $value: string;
  setKeyWord: (word: string) => void;
}

const SearchBar = ({
  closeModal,
  setSearchResult,
  $value,
  setKeyWord,
}: SearchBarProps) => {
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
        <S.IconBtn onClick={() => {}}>
          <S.SearchIcon src="/svg/search-icon.svg" />
        </S.IconBtn>
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchBar;
