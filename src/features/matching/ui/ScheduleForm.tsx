import DatePicker from './DatePicker';
import LocationSelect from './LocationSelect';
import TimeStamp from './TimeStamp';
import * as S from './schedule-form-style';

export default function ScheduleForm() {
  return (
    <S.Container>
      <DatePicker />
      <TimeStamp />
      <LocationSelect />
    </S.Container>
  );
}
