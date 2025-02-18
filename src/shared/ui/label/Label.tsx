import * as S from './style';

type LabelProps = {
  text: string;
  fontColor: string;
  backgroundColor: string;
  borderColor?: string;
  width: number;
  height: number;
  onClick?: () => void;
};

export default function Label({
  text,
  fontColor,
  borderColor = 'transparent',
  backgroundColor,
  width,
  height,
  onClick,
}: LabelProps) {
  return (
    <S.LabelContainer
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      radius="24px"
      width={width}
      height={height}
      onClick={onClick}
    >
      <S.LabelText $fontColor={fontColor}>{text}</S.LabelText>
    </S.LabelContainer>
  );
}
