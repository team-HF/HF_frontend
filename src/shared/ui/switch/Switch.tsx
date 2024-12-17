import * as S from "./style";

interface switchProps {
  value: string;
  onClick: (value: string, checked: boolean) => void;
}

const Switch = ({ value, onClick }: switchProps) => {
  const clickSwitch = (value: string, checked: boolean) => {
    onClick(value, checked);
  };
  return (
    <>
      <S.Input
        type="checkbox"
        id="toggle"
        value={value}
        onChange={(e) => {
          clickSwitch(e.target.value, e.target.checked);
        }}
      />
      <S.ToggleSwitch htmlFor="toggle">
        <S.ToggleButton />
      </S.ToggleSwitch>
    </>
  );
};

export default Switch;
