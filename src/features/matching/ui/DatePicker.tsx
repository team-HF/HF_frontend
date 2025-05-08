import { useState } from 'react';
import Calendar from '../../../shared/ui/calendar/Calendar';
import * as S from './schedule-field-style';

type DatePickerProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
};

export default function DatePicker({
  selectedDate,
  setSelectedDate,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const displayValue = selectedDate
    ? selectedDate.toLocaleDateString('ko-KR')
    : '';

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    setIsOpen(false);
  };
  const handleCloseCalendar = () => {
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.Title>날짜</S.Title>
      <S.FieldWrapper>
        <S.FieldInput
          type="text"
          placeholder="날짜를 선택하세요"
          value={displayValue}
          readOnly
          onClick={() => setIsOpen(true)}
          aria-label="날짜"
        />

        <S.Icon
          src="/svg/under-arrow-icon.svg"
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <Calendar
            selectedDate={selectedDate}
            onChange={handleDateChange}
            onClose={handleCloseCalendar}
          />
        )}
      </S.FieldWrapper>
    </S.Container>
  );
}
