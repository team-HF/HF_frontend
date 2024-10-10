import * as S from './style';

type LargeButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  $isValid?: boolean;
};
export default function LargeButton({
  text,
  onClick,
  type,
  $isValid = false,
}: LargeButtonProps) {
  return (
    <S.Container onClick={onClick} type={type} $isValid={$isValid}>
      <S.StyledText>{text}</S.StyledText>
    </S.Container>
  );
}
