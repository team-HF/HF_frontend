import * as S from './style';

type SearchTabIconProps = {
  text: string;
};
export default function SearchTabItem({ text }: SearchTabIconProps) {
  return (
    <S.SearchTabContainer>
      <S.TabText>{text}</S.TabText>
    </S.SearchTabContainer>
  );
}
