import * as S from "./style";

const EditButton = () => {
  return (
    <S.Container>
      <S.Button>수정</S.Button>
      <S.Divider />
      <S.Button>삭제</S.Button>
    </S.Container>
  );
};

export default EditButton;
