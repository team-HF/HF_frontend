import * as S from "./style";

interface paramsInput {
  placeholder: string;
  disabled: boolean;
}

const Input = ({ placeholder, disabled }: paramsInput) => {
  return (
    <S.Container disabled={disabled}>
      <S.Value placeholder={placeholder} disabled={disabled} />
    </S.Container>
  );
};

export default Input;
