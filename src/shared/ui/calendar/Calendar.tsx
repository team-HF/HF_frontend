import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import * as s from './styles';

type CalenderTypes = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};
const Calendar = ({ selectedDate, onChange }: CalenderTypes) => {
  return (
    <s.CalendarContainer>
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫히는 설정
        maxDate={new Date()} // 현재날짜 기준으로 이 후 날짜 선택불가
        placeholderText="YYYY-MM-DD"
        showYearDropdown //년도 선택 드롭다운
        showMonthDropdown //월 선택 드롭다운
        dropdownMode="select"
        selected={selectedDate}
        onChange={onChange}
      />
    </s.CalendarContainer>
  );
};

export default Calendar;
