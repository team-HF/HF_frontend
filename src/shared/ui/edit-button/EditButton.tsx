import * as S from "./style";

interface EditButtonProps {
  updateContent: () => void;
  deleteContent: () => void;
}

const EditButton = ({ updateContent, deleteContent }: EditButtonProps) => {
  return (
    <S.Container>
      <S.Button onClick={updateContent}>수정</S.Button>
      <S.Divider />
      <S.Button onClick={deleteContent}>삭제</S.Button>
    </S.Container>
  );
};

export default EditButton;
