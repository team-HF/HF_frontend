import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import * as S from './style';

type CalendarTypes = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  onClose: () => void;
};

export default function Calendar({
  selectedDate,
  onChange,
  onClose,
}: CalendarTypes) {
  const [date, setDate] = useState<Date | null>(selectedDate);

  const handleDateChange = (value: Date | null) => {
    setDate(value);
    onChange(value);
  };

  return (
    <S.CalendarContainer>
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={handleDateChange}
        // 달력 항상 오픈
        open={true}
        // 달력이 뜨는 위치(오른쪽 하단 정렬 등)
        popperPlacement="bottom-end"
        // 커스텀 popper 클래스
        popperClassName="myDatePickerPopper"
        // input 대신 div를 사용(기본 input 숨김)
        customInput={<div />}
        // 오늘 이전 날짜 비활성화
        minDate={new Date()}
        // 달력 영역 밖 클릭 시 닫기
        onClickOutside={onClose}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <S.Header>
            <S.ArrowButton
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              &lt;
            </S.ArrowButton>
            <S.SelectContainer>
              <select
                value={date.getFullYear()}
                onChange={(e) => changeYear(parseInt(e.target.value))}
              >
                {Array.from(
                  { length: new Date().getFullYear() - 1940 + 1 },
                  (_, i) => {
                    const year = 1940 + i;
                    return (
                      <option key={year} value={year}>
                        {year}년
                      </option>
                    );
                  }
                )}
              </select>
              <select
                value={date.getMonth()}
                onChange={(e) => changeMonth(parseInt(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {i + 1}월
                  </option>
                ))}
              </select>
            </S.SelectContainer>
            <S.ArrowButton
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              &gt;
            </S.ArrowButton>
          </S.Header>
        )}
      />
    </S.CalendarContainer>
  );
}
