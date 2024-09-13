import Button from '../../../shared/ui/button/Button';
import { useNavigate } from 'react-router-dom';

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
      <Button
        width="20.125rem"
        height="2.8125rem"
        color="main"
        text="다음"
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
}
