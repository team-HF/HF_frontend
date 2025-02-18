import { useNavigate } from 'react-router-dom';
import Label from '../../../shared/ui/label/Label';

type RequestMatchingLabelProps = {
  chatroomId: string;
};
export default function RequestMatchingLabel({
  chatroomId,
}: RequestMatchingLabelProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/matching/${chatroomId}`);
  };
  return (
    <Label
      width={50}
      height={22}
      text="매칭신청"
      fontColor="#007326"
      backgroundColor="#54AFB5"
      onClick={onClick}
    />
  );
}
