import * as s from './style';

//  backgroundColor: '#ffffff' | '#F8F8F8';
// color: '#4d4d4d' | '#000000'
export default function Item() {
  return (
    <s.ItemContainer backgroundColor="#ffffff">
      <s.StyledText color="#4d4d4d">Column Value</s.StyledText>
    </s.ItemContainer>
  );
}
