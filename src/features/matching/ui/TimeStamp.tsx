import { useState } from 'react';
import * as S from './time-stamp-style';
import EmblaCarousel from '../../../shared/ui/time-picker/EmblaCarousel';
import { EmblaLocalWrapper } from '../../../shared/ui/time-picker/embla-wrapper';
import ConfirmButton from './ConfirmButton';

type Time = {
  period: string;
  hour: number;
  minute: number;
};

type TimeStampProps = {
  selectedTime: Time | null;
  setSelectedTime: (time: Time | null) => void;
};
export default function TimeStamp({
  selectedTime,
  setSelectedTime,
}: TimeStampProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultTime = { period: '오전', hour: 1, minute: 0 };

  const openPicker = () => {
    setIsOpen(true);
  };

  const handleTimeSelect = (time: Time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const timeString = selectedTime
    ? `${selectedTime.period} ${selectedTime.hour}시 ${selectedTime.minute}분`
    : '';

  return (
    <S.Container>
      <S.Title>시간</S.Title>
      <S.FieldWrapper>
        <S.FieldInput
          placeholder="시간을 선택하세요"
          readOnly
          value={timeString}
          aria-label="시간"
        />
        <S.Icon
          src="/svg/under-arrow-icon.svg"
          alt="arrow"
          onClick={openPicker}
        />

        {isOpen && (
          <>
            <S.Overlay onClick={handleConfirm} />
            <EmblaLocalWrapper className="theme-white">
              <EmblaCarousel
                onTimeSelect={handleTimeSelect}
                initialTime={selectedTime || defaultTime}
              >
                <ConfirmButton onConfirm={handleConfirm} />
              </EmblaCarousel>
            </EmblaLocalWrapper>
          </>
        )}
      </S.FieldWrapper>
    </S.Container>
  );
}
