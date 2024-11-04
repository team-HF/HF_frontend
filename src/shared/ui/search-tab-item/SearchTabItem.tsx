import * as s from "./style";

interface SearchTabIconProps<T> {
  id: T;
  name: string;
  currentCategory: string;
  onClick: (id: T) => void;
}

export default function SearchTabItem<T>({
  id,
  name,
  currentCategory,
  onClick,
}: SearchTabIconProps<T>) {
  return (
    <s.SearchTabContainer
      id={String(id)}
      $current_filter={currentCategory}
      onClick={() => onClick(id)}
    >
      <s.TabText id={String(id)} $current_filter={currentCategory}>
        {name}
      </s.TabText>
    </s.SearchTabContainer>
  );
}
