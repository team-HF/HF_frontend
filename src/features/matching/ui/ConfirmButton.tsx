import * as S from './confirm-button-style';
type ConfirmButtonProps = {
  onConfirm: () => void;
};

export default function ConfirmButton({ onConfirm }: ConfirmButtonProps) {
  return <S.Button onClick={onConfirm}>확인</S.Button>;
}
