import * as s from './styles';

type ButtonProps = {
  color: 'main' | 'sub' | 'point';
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  width: string;
  height: string;
};

export default function Button({
  color,
  text,
  onClick,
  disabled,
  width,
  height,
}: ButtonProps) {
  return (
    <s.StyledButton
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </s.StyledButton>
  );
}
