import * as S from "./style";

interface AlertProps {
  title?: string;
  content: string | string[];
  cancelBtn: boolean;
  confirm: () => void;
  cancel?: () => void;
}

const Alert = ({ title, content, cancelBtn, confirm, cancel }: AlertProps) => {
  return (
    <S.Background>
      <S.Container>
        {title && <S.Title>{title}</S.Title>}
        <S.Contents>
          {Array.isArray(content)
            ? content.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))
            : content}
        </S.Contents>
        <S.BtnBox>
          <S.CheckBtn onClick={confirm}>확인</S.CheckBtn>
          {cancelBtn && (
            <S.CheckBtn className="cancel" onClick={cancel}>
              취소
            </S.CheckBtn>
          )}
        </S.BtnBox>
      </S.Container>
    </S.Background>
  );
};

export default Alert;
