import * as S from './style';

type LabelProps = {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderColor?: string;
  width: number;
};

export default function Label({
  text,
  fontColor,
  borderColor = 'transparent',
  backgroundColor,
  width,
}: LabelProps) {
  return (
    <S.LabelContainer
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      radius="24px"
      $width={width}
    >
      <S.LabelText $fontColor={fontColor}>{text}</S.LabelText>
    </S.LabelContainer>
  );
}
