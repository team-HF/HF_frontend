import DatePicker from './DatePicker';
import LocationSelect from './LocationSelect.tsx';
import * as S from './schedule-form-style.ts';
import TimeStamp from './TimeStamp.tsx';

export default function ScheduleForm() {
  return (
    <S.Container>
      <DatePicker />
      <TimeStamp />
      <LocationSelect />
    </S.Container>
  );
}
