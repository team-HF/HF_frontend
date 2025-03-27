import MinButton from '../../../shared/ui/min-button/MinButton';

type MatchingButtonProps = {
  onClick: () => void;
};

export default function MatchingButton({ onClick }: MatchingButtonProps) {
  return (
    <MinButton
      button_shape="semi-around"
      button_style="style_4"
      name="요청"
      onClick={onClick}
    />
  );
}
