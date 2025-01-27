import MinButton from '../../../shared/ui/min-button/MinButton';

type MatchingButtonProps = {
  userId: number;
};
export default function MatchingButton() {
  return (
    <MinButton button_shape="semi-around" button_style="style_4" name="요청" />
  );
}
