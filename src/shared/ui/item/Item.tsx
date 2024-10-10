import * as S from './style';

//  backgroundColor: '#ffffff' | '#F8F8F8';
// color: '#4d4d4d' | '#000000'
export default function Item() {
  return (
    <S.ItemContainer backgroundColor="#ffffff">
      <S.StyledText color="#4d4d4d">Column Value</S.StyledText>
    </S.ItemContainer>
  );
}
