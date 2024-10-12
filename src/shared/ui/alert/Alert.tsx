import * as S from "./style";

const Alert = (header: boolean) => {
  return (
    <S.Container>
      {header && (
        <S.Header>
          <S.Title>알럿</S.Title>
          <S.CloseBtn src="/svg/close-icon.svg" />
        </S.Header>
      )}
      <S.Body>
        <S.Contents>경고 내용</S.Contents>
        <S.CheckBtn>확인</S.CheckBtn>
      </S.Body>
    </S.Container>
  );
};

export default Alert;
