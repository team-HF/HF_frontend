import * as s from './styles';

type ButtonProps = {
  color: 'main' | 'sub' | 'point';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  color,
  text,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <s.StyledButton color={color} onClick={onClick} disabled={disabled}>
      {text}
    </s.StyledButton>
  );
}
