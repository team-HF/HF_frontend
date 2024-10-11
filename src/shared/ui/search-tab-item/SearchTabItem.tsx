<<<<<<< HEAD
import * as s from "./style";
=======
import * as S from './style';
>>>>>>> dev

interface SearchTabIconProps {
  id: string;
  $current_filter: string;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchTabItem({
  id,
  $current_filter,
  setContentType,
}: SearchTabIconProps) {
  const changeType = (type: string) => {
    setContentType(type);
  };
  return (
<<<<<<< HEAD
    <s.SearchTabContainer
      id={id}
      $current_filter={$current_filter}
      onClick={() => {
        changeType(id);
      }}
    >
      <s.TabText id={id} $current_filter={$current_filter}>
        {id}
      </s.TabText>
    </s.SearchTabContainer>
=======
    <S.SearchTabContainer>
      <S.TabText>{text}</S.TabText>
    </S.SearchTabContainer>
>>>>>>> dev
  );
}
