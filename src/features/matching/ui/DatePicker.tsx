import { useState } from 'react';
import Calendar from '../../../shared/ui/calendar/Calendar';
import * as S from './schedule-field-style';

export default function DatePicker() {
  const [date, setDate] = useState<Date | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
    setIsOpen(false);
  };
  const handleCloseCalendar = () => {
    setIsOpen(false);
  };
  const displayValue = date ? date.toLocaleDateString('ko-KR') : '';

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
        />

        <S.Icon
          src="/svg/under-arrow-icon.svg"
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <Calendar
            selectedDate={date}
            onChange={handleDateChange}
            onClose={handleCloseCalendar}
          />
        )}
      </S.FieldWrapper>
    </S.Container>
  );
}
