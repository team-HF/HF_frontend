import * as s from './style';

type LabelProps = {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
};

export default function Label({
  text,
  fontColor,
  borderColor,
  backgroundColor,
}: LabelProps) {
  return (
    <s.LabelContainer
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      radius="24px"
    >
      <s.LabelText fontColor={fontColor}>{text}</s.LabelText>
    </s.LabelContainer>
  );
}
