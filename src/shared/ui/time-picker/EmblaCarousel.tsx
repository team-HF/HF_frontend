import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import * as S from './embla-style';
import IosPickerItem from './IosPickerItem';

type PropType = {
  loop?: EmblaOptionsType['loop'];
  children?: ReactNode;
};

const EmblaCarousel: React.FC<PropType> = ({ loop, children }) => {
  return (
    <S.EmblaContainer>
      <S.PickerWrapper>
        <IosPickerItem
          customSlides={['오전', '오후']}
          perspective="left"
          loop={loop}
        />
        <IosPickerItem
          start={1}
          end={12}
          step={1}
          perspective="left"
          loop={loop}
        />
        <IosPickerItem
          start={0}
          end={55}
          step={5}
          perspective="right"
          loop={loop}
        />
      </S.PickerWrapper>
      <S.ButtonWrapper>{children}</S.ButtonWrapper>
    </S.EmblaContainer>
  );
};

export default EmblaCarousel;
