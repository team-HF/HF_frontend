import React, { useEffect, useCallback, useRef } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './IosPickerItem-style';

const CIRCLE_DEGREES = 360;
const WHEEL_ITEM_SIZE = 32;
const WHEEL_ITEM_COUNT = 18;
const WHEEL_ITEMS_IN_VIEW = 4;

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT;
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW;
export const WHEEL_RADIUS = Math.round(
  WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)
);

const isInView = (wheelLocation: number, slidePosition: number): boolean =>
  Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES;

const setSlideStyles = (
  emblaApi: EmblaCarouselType,
  index: number,
  loop: boolean,
  slideCount: number,
  totalRadius: number
): void => {
  const slideNode = emblaApi.slideNodes()[index];
  const wheelLocation = emblaApi.scrollProgress() * totalRadius;
  const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius;
  const positionLoopStart = positionDefault + totalRadius;
  const positionLoopEnd = positionDefault - totalRadius;

  let inView = false;
  let angle = index * -WHEEL_ITEM_RADIUS;

  if (isInView(wheelLocation, positionDefault)) {
    inView = true;
  }
  if (loop && isInView(wheelLocation, positionLoopEnd)) {
    inView = true;
    angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS;
  }
  if (loop && isInView(wheelLocation, positionLoopStart)) {
    inView = true;
    angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS;
  }

  if (inView) {
    const selectedIndex = emblaApi.selectedScrollSnap();
    const isSelected = index === selectedIndex;

    slideNode.style.opacity = '1';
    slideNode.style.transform = `translateY(-${
      index * 100
    }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`;
    slideNode.style.color = isSelected ? '#000000' : '#999999';
  } else {
    slideNode.style.opacity = '0';
    slideNode.style.transform = 'none';
  }
};

export const setContainerStyles = (
  emblaApi: EmblaCarouselType,
  wheelRotation: number
): void => {
  emblaApi
    .containerNode()
    .style.setProperty(
      'transform',
      `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`
    );
};

type PropType = {
  loop?: boolean;
  label?: string;
  slideCount?: number;
  perspective: 'left' | 'right';
  step?: number;
  customSlides?: (string | number)[];
  start?: number;
  end?: number;
  selectedValue?: string | number;
  onSelect?: (value: string | number) => void;
};

const IosPickerItem: React.FC<PropType> = ({
  loop = false,
  label,
  perspective,
  slideCount = 0,
  step = 1,
  customSlides,
  start,
  end,
  selectedValue,
  onSelect,
}) => {
  // slides 배열
  const makeRange = (startVal: number, endVal: number, stepVal: number) => {
    const arr: number[] = [];
    for (let i = startVal; i <= endVal; i += stepVal) {
      arr.push(i);
    }
    return arr;
  };

  let slides: (string | number)[] = [];
  if (customSlides) {
    slides = customSlides;
  } else if (start !== undefined && end !== undefined) {
    slides = makeRange(start, end, step);
  } else {
    slides = Array.from({ length: slideCount }, (_, i) => i * step);
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    axis: 'y',
    dragFree: true,
    containScroll: false,
    watchSlides: false,
  });

  const rootNodeRef = useRef<HTMLDivElement>(null);

  // 전체 3D 회전 각도
  const totalRadius = slides.length * WHEEL_ITEM_RADIUS;
  // loop가 아닐 때는 미묘하게 회전 각도를 오프셋
  const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS;

  const inactivateEmblaTransform = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!emblaApi) return;
      const { translate, slideLooper } = emblaApi.internalEngine();
      translate.clear();
      translate.toggleActive(false);
      slideLooper.loopPoints.forEach(({ translate }) => {
        translate.clear();
        translate.toggleActive(false);
      });
    },
    []
  );

  // 휠 회전 (3D) 및 슬라이드 스타일 적용
  const rotateWheel = useCallback(
    (emblaApi: EmblaCarouselType) => {
      // 현재 스크롤 진행도를 바탕으로 휠 각도 계산
      const wheelRotation =
        (slides.length * WHEEL_ITEM_RADIUS - rotationOffset) *
        emblaApi.scrollProgress();

      setContainerStyles(emblaApi, wheelRotation);
      emblaApi.slideNodes().forEach((_, index) => {
        setSlideStyles(emblaApi, index, loop, slides.length, totalRadius);
      });
    },
    [slides, loop, rotationOffset, totalRadius]
  );

  // 사용자가 스크롤을 멈췄을 때, 가까운 스냅포인트로 이동
  useEffect(() => {
    if (!emblaApi) return;

    // 사용자가 드래그를 놓는 순간(pointerUp) → 가장 가까운 위치로 스냅
    emblaApi.on('pointerUp', (embla) => {
      const { scrollTo, target, location } = embla.internalEngine();
      const diffToTarget = target.get() - location.get();
      // diff가 너무 작으면(거의 정중앙 가까이) 바로, 멀면 천천히
      const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 1 : 0.01;
      const distance = diffToTarget * factor;
      scrollTo.distance(distance, true);
    });

    // scroll 이벤트 발생 시, wheel 업데이트
    emblaApi.on('scroll', rotateWheel);
    emblaApi.on('select', () => {
      rotateWheel(emblaApi);

      // embla가 선택한 인덱스 → slides 배열에서 값 추출
      const selectedIndex = emblaApi.selectedScrollSnap();
      const selectedVal = slides[selectedIndex];
      onSelect?.(selectedVal);
    });

    // 재초기화 하는 시점
    emblaApi.on('reInit', (embla) => {
      inactivateEmblaTransform(embla);
      rotateWheel(embla);
    });

    inactivateEmblaTransform(emblaApi);
    rotateWheel(emblaApi);
  }, [emblaApi, inactivateEmblaTransform, rotateWheel, onSelect, slides]);

  // 외부에서 `selectedValue`가 바뀔 때 → 해당 인덱스로 휠 이동
  useEffect(() => {
    if (!emblaApi || selectedValue == null) return;
    const index = slides.findIndex((v) => v === selectedValue);
    if (index !== -1) {
      emblaApi.scrollTo(index, false);
    }
  }, [emblaApi, selectedValue, slides]);

  return (
    <S.IosPicker>
      <S.IosPickerScene ref={rootNodeRef}>
        <S.IosPickerViewport perspective={perspective} ref={emblaRef}>
          <S.IosPickerContainer>
            {slides.map((value, index) => (
              <S.IosPickerSlide key={index}>{value}</S.IosPickerSlide>
            ))}
          </S.IosPickerContainer>
        </S.IosPickerViewport>
      </S.IosPickerScene>
      <S.IosPickerLabel>{label}</S.IosPickerLabel>
    </S.IosPicker>
  );
};

export default IosPickerItem;
