import * as S from "./style";

interface InputProps {
  placeholder: string;
  error: boolean;
}

const StandardInput = ({ placeholder, error } : InputProps) => {
  return (
    <>
      <S.Container error={error}>
        <S.Value placeholder={placeholder}/>
      </S.Container>
      <S.FormMessage>text~~!!~!</S.FormMessage>
    </>
  );
};

export default StandardInput;
