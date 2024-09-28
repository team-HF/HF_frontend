import * as s from './style';

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
    <s.StyledMediumButton
      backgroundColor={backgroundColor}
      border={border}
      onClick={onClick}
      disabled={disabled}
    >
      <s.StyledText color={color} disabled={disabled}>
        {text}
      </s.StyledText>
    </s.StyledMediumButton>
  );
}
