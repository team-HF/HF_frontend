import { useNavigate } from 'react-router-dom';
import * as S from './empty-matching-list.style';

export default function EmptyMatchingList() {
  const navigate = useNavigate();
  const onClickMatchingStart = () => {
    navigate('/');
  };
  return (
    <S.Container>
      <S.Text>매칭 리스트가 비어있습니다.</S.Text>
      <S.Text>새로운 운동 친구를 만나보세요</S.Text>
      <S.Button onClick={onClickMatchingStart}>매칭하러 가기</S.Button>
    </S.Container>
  );
}
