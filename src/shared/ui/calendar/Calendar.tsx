import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import * as S from './style';

type CalendarTypes = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

export default function Calendar({ selectedDate, onChange }: CalendarTypes) {
  const [date, setDate] = useState<Date | null>(selectedDate);

  const handleDateChange = (date: Date | null) => {
    setDate(date);
    onChange(date);
  };

  return (
    <S.CalendarContainer>
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={date}
        onChange={handleDateChange}
        open={true}
        popperPlacement="bottom-end"
        popperClassName="myDatePickerPopper"
        customInput={<div />}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              &lt;
            </button>
            <span>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) =>
                  changeYear(parseInt(value))
                }
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
                onChange={({ target: { value } }) =>
                  changeMonth(parseInt(value))
                }
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {i + 1}월
                  </option>
                ))}
              </select>
            </span>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              &gt;
            </button>
          </div>
        )}
      />
    </S.CalendarContainer>
  );
}
