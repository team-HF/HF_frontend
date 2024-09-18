import Button from '../../../shared/ui/button/Button';

type SaveButtonProps = {
  disabled: boolean;
};
export default function SaveButton({ disabled }: SaveButtonProps) {
  return (
    <div>
      <Button
        width="20.125rem"
        height="2.8125rem"
        color="main"
        text="저장"
        disabled={disabled}
      />
    </div>
  );
}
