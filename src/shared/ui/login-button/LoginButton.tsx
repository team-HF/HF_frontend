import { useNavigate } from 'react-router-dom';
import Label from '../label/Label';

export default function LoginButton() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };
  return (
    <Label
      width={58}
      height={22}
      text="로그인"
      fontColor="#fff"
      backgroundColor="#6541F2"
      onClick={onClick}
    />
  );
}
