import * as S from './duplicate-nickname-button-style';
import { useGetDuplicateNickname } from '../api/useGetDuplicateNickName';

interface DuplicateNicknameButtonProps {
  nickname: string | null;
  onSuccess: (validatedName: string) => void;
  disabled?: boolean;
}

export default function DuplicateNicknameButton({
  nickname,
  onSuccess,
  disabled = false,
}: DuplicateNicknameButtonProps) {
  const { refetch } = useGetDuplicateNickname(nickname);
  const onClick = async () => {
    const result = await refetch();
    if (disabled) return;
    if (result.data?.content === true) {
      alert('이미 사용중인 닉네임입니다.');
    } else {
      alert('사용 가능한 닉네임입니다.');
      if (nickname) {
        onSuccess(nickname);
      }
    }
  };

  return (
    <S.Container>
      <S.StyledSpan onClick={onClick}>중복검사</S.StyledSpan>
    </S.Container>
  );
}
