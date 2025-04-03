import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PartnerInfo from '../../entities/matching/ui/PartnerInfo';
import MatchingButton from '../../features/matching/ui/MatchingButton';
import ScheduleForm from '../../features/matching/ui/ScheduleForm';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';
import { useContext, useState } from 'react';
import { SocketContext } from '../../app/providers/SocketProvider';

type Time = {
  period: string;
  hour: number;
  minute: number;
};

export default function Matching() {
  const { state } = useLocation();
  const matchingTargetId = state;
  const socketContext = useContext(SocketContext);
  const { stompClient, memberId } = socketContext || {};
  const navigate = useNavigate();
  const { id: chatRoomId } = useParams();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Time | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleMatchingRequest = () => {
    if (!selectedDate) {
      alert('날짜를 선택해주세요.');
      return;
    }
    if (!selectedTime) {
      alert('시간을 선택해주세요.');
      return;
    }
    if (!selectedLocation) {
      alert('장소를 선택해주세요.');
      return;
    }
    if (!memberId) {
      console.error('memberId가 없습니다.');
      return;
    }
    // AM/PM을 고려하여 시간을 24시간 형식으로 변환
    let meetingHour = selectedTime.hour;
    if (selectedTime.period.toUpperCase() === 'PM' && meetingHour < 12) {
      meetingHour += 12;
    }
    if (selectedTime.period.toUpperCase() === 'AM' && meetingHour === 12) {
      meetingHour = 0;
    }
    const meetingDateTime = new Date(selectedDate);
    meetingDateTime.setHours(meetingHour, selectedTime.minute, 0, 0);
    const meetingTime = meetingDateTime.toISOString().split('.')[0];

    const messagePayload = {
      senderId: memberId,
      chatMessageType: 'MATCHING_REQUEST',
      content: {
        matchingTargetId: matchingTargetId,
        meetingTime,
        meetingPlace: selectedLocation,
        meetingPlaceAddress: '',
      },
    };
    console.log(messagePayload);
    if (stompClient && chatRoomId) {
      stompClient.publish({
        destination: `/hf/app/chat/messages/${chatRoomId}`,
        body: JSON.stringify(messagePayload),
      });
      navigate(`/chat/${chatRoomId}`);
    } else {
      alert('매칭 요청에 실패했습니다.');
    }
  };

  return (
    <S.Container>
      <BackHeader text="매칭 신청" style={{ padding: 0 }} />
      <S.Content>
        <PartnerInfo matchingUserId={matchingTargetId} />
        <S.DetailDiv>상세 일정</S.DetailDiv>
        <ScheduleForm
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </S.Content>
      <S.BottomWrapper>
        <MatchingButton onClick={handleMatchingRequest} />
      </S.BottomWrapper>
    </S.Container>
  );
}
