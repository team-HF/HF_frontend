import * as S from './bubble-message-button';

interface ButtonProps {
  children?: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function BubbleMessageButton({
  children,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonWrapper>
      <S.Button variant={variant} onClick={onClick}>
        {children}
      </S.Button>
    </S.ButtonWrapper>
  );
}
