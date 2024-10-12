import MediumButton from "../../../shared/ui/medium-button/MediumButton";

type SaveButtonProps = {
  disabled: boolean;
};
export default function SaveButton({ disabled }: SaveButtonProps) {
  return (
    <div>
      <MediumButton
        text="임시 버튼"
        color="black"
        backgroundColor="gray"
        border="1px solid black"
        disabled={disabled}
        onClick={() => console.log("run")}
      />
    </div>
  );
}
