import * as s from './style';

type SearchTabIconProps = {
  text: string;
};
export default function SearchTabItem({ text }: SearchTabIconProps) {
  return (
    <s.SearchTabContainer>
      <s.TabText>{text}</s.TabText>
    </s.SearchTabContainer>
  );
}
