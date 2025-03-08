import { useNavigate } from 'react-router-dom';
import Label from '../../../shared/ui/label/Label';

type RequestMatchingLabelProps = {
  chatroomId: string;
  matchingUserId: number;
};
export default function RequestMatchingLabel({
  chatroomId,
  matchingUserId,
}: RequestMatchingLabelProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/matching/${chatroomId}`, { state: matchingUserId });
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
