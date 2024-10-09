import * as S from './style';

type MediumButtonProps = {
  text: string;
  backgroundColor: string;
  color: string;
  onClick?: () => void;
  border: string;
  disabled?: boolean;
};

export default function MediumButton({
  backgroundColor,
  text,
  color,
  onClick,
  border,
  disabled,
}: MediumButtonProps) {
  return (
    <S.StyledMediumButton
      $backgroundColor={backgroundColor}
      $border={border}
      onClick={onClick}
      disabled={disabled}
    >
      <S.StyledText $color={color} disabled={disabled}>
        {text}
      </S.StyledText>
    </S.StyledMediumButton>
  );
}
