import { EmblaOptionsType } from 'embla-carousel';
import * as S from './embla-style';
import IosPickerItem from './IosPickerItem';
import { ReactNode, useEffect, useState } from 'react';

type Time = {
  period: string;
  hour: number;
  minute: number;
};

type PropType = {
  loop?: EmblaOptionsType['loop'];
  children?: ReactNode;
  onTimeSelect?: (time: Time) => void;
  initialTime: Time;
};

const EmblaCarousel: React.FC<PropType> = ({
  loop,
  children,
  onTimeSelect,
  initialTime,
}) => {
  const [currentTime, setCurrentTime] = useState<Time>(initialTime);
  useEffect(() => {
    setCurrentTime(initialTime);
  }, [initialTime]);
  const handlePeriodSelect = (value: string | number) => {
    if (typeof value === 'string') {
      const newTime = { ...currentTime, period: value };
      setCurrentTime(newTime);
      onTimeSelect?.(newTime);
    }
  };

  const handleHourSelect = (value: string | number) => {
    if (typeof value === 'number') {
      const newTime = { ...currentTime, hour: value };
      setCurrentTime(newTime);
      onTimeSelect?.(newTime);
    }
  };

  const handleMinuteSelect = (value: string | number) => {
    if (typeof value === 'number') {
      const newTime = { ...currentTime, minute: value };
      setCurrentTime(newTime);
      onTimeSelect?.(newTime);
    }
  };
  return (
    <S.EmblaContainer>
      <S.PickerWrapper>
        <IosPickerItem
          customSlides={['오전', '오후']}
          perspective="left"
          loop={loop}
          onSelect={handlePeriodSelect}
          selectedValue={currentTime.period}
        />

        <IosPickerItem
          start={1}
          end={12}
          step={1}
          perspective="left"
          loop={loop}
          onSelect={handleHourSelect}
          selectedValue={currentTime.hour}
        />

        <IosPickerItem
          start={0}
          end={55}
          step={5}
          perspective="right"
          loop={loop}
          onSelect={handleMinuteSelect}
          selectedValue={currentTime.minute}
        />
      </S.PickerWrapper>
      <S.ButtonWrapper>{children}</S.ButtonWrapper>
    </S.EmblaContainer>
  );
};

export default EmblaCarousel;
