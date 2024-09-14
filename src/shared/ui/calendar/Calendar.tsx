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
        dateFormat="yyyy.MM.dd" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        placeholderText="YYYY-MM-DD"
        selected={selectedDate}
        onChange={onChange}
      />
    </s.CalendarContainer>
  );
};

export default Calendar;
