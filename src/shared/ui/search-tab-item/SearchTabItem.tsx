import * as s from "./style";

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
  );
}
