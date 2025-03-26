import DatePicker from './DatePicker';
import LocationSelect from './LocationSelect';
import TimeStamp from './TimeStamp';
import * as S from './schedule-form-style';

type Time = {
  period: string;
  hour: number;
  minute: number;
};

type ScheduleFormProps = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: Time | null;
  setSelectedTime: (time: Time | null) => void;
  selectedLocation: string | null;
  setSelectedLocation: (location: string | null) => void;
};

export default function ScheduleForm({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedLocation,
  setSelectedLocation,
}: ScheduleFormProps) {
  return (
    <S.Container>
      <DatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TimeStamp
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <LocationSelect
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </S.Container>
  );
}
