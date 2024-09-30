import * as S from "./style";

const Switch = () => {
  return (
    <>
      <S.Input type="checkbox" id="toggle" />
      <S.ToggleSwitch htmlFor="toggle">
        <S.ToggleButton />
      </S.ToggleSwitch>
    </>
  );
};

export default Switch;
