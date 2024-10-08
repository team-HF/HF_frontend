import * as S from './style';

type LargeButtonProps = {
  text: string;
  onClick?: () => void;
};
export default function LargeButton({ text, onClick }: LargeButtonProps) {
  return (
    <S.Container>
      <S.StyledText onClick={onClick}>{text}</S.StyledText>
    </S.Container>
  );
}
