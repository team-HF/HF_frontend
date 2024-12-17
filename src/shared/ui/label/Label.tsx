import * as S from './style';

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
    <S.LabelContainer
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      radius="24px"
    >
      <S.LabelText fontColor={fontColor}>{text}</S.LabelText>
    </S.LabelContainer>
  );
}
