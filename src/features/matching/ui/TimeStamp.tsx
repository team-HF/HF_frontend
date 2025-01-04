import { useState } from 'react';
import * as S from './time-stamp-style';
import EmblaCarousel from '../../../shared/ui/time-picker/EmblaCarousel';
import { EmblaLocalWrapper } from '../../../shared/ui/time-picker/embla-wrapper';
import ConfirmButton from './ConfirmButton';

type Time = {
  period: string;
  hour: number;
  minute: number;
};

export default function TimeStamp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Time>({
    period: '오전',
    hour: 1,
    minute: 0,
  });
  const handleConfirm = () => {
    console.log('선택된 시간:', selectedTime);
    setIsOpen(false);
  };
  return (
    <S.Container>
      <S.Title>시간</S.Title>
      <S.FieldWrapper>
        <S.FieldInput placeholder="시간을 선택하세요" readOnly />
        <S.Icon
          src="/svg/under-arrow-icon.svg"
          alt="arrow"
          onClick={() => setIsOpen(!isOpen)}
        />
        <EmblaLocalWrapper className="theme-white">
          {isOpen && (
            <>
              <EmblaCarousel>
                <ConfirmButton onConfirm={handleConfirm} />
              </EmblaCarousel>
            </>
          )}
        </EmblaLocalWrapper>
      </S.FieldWrapper>
    </S.Container>
  );
}
