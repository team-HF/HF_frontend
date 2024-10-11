import { useNavigate } from 'react-router-dom';
import MediumButton from '../../../shared/ui/medium-button/MediumButton';

type NextButtonProps = {
  disabled: boolean;
};
export default function NextButton({ disabled }: NextButtonProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/register/profile');
  };
  return (
    <div>
      <MediumButton
        text="임시 버튼"
        color="black"
        onClick={onClick}
        backgroundColor="gray"
        border="1px solid black"
        disabled={disabled}
      />
    </div>
  );
}
