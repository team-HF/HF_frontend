import { useState } from 'react';
import * as S from './style';

interface DatePickerProps {
  date: string | null;
  setDate: (option: string) => void;
  placeHolder: string;
  optionData: { id: number; value: string }[];
}

const DatePicker = ({
  date,
  setDate,
  placeHolder,
  optionData,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const clickOption = (selectedDate: string) => {
    setDate(String(selectedDate));
  };
  const options = optionData.map((option) => (
    <S.Option
      key={`date_option_${option.value}`}
      onClick={() => clickOption(option.value)}
    >
      {option.id}
    </S.Option>
  ));
  return (
    <S.Container $type_year={true} onClick={() => setOpen(!open)}>
      <S.SelectedDate selected={date}>
        {date ? date : placeHolder}
      </S.SelectedDate>
      <S.Arrow src={'/svg/left-arrow-icon.svg'} open={open} />
      <S.OptionContainer open={open} $type_year={true}>
        {options}
      </S.OptionContainer>
    </S.Container>
  );
};

export default DatePicker;
