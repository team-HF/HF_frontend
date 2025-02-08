import styled, { css } from 'styled-components';

export const IosPicker = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  min-width: 40%;
  justify-content: center;
  line-height: 1;
  font-size: 16px;
`;

/** .embla__ios-picker__scene */
export const IosPickerScene = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  touch-action: pan-x;
`;

/** .embla__ios-picker__viewport */
type ViewportProps = {
  perspective?: 'left' | 'right';
};

export const IosPickerViewport = styled.div<ViewportProps>`
  height: 32px;
  perspective: 1000px;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;

  ${({ perspective }) =>
    perspective === 'left'
      ? css`
          perspective-origin: calc(50% + 130px) 50%;
          transform: translateX(27px);
        `
      : perspective === 'right'
      ? css`
          perspective-origin: calc(50% - 130px) 50%;
          transform: translateX(-27px);
        `
      : ''}
`;

/** .embla__ios-picker__container */
export const IosPickerContainer = styled.div`
  height: 100%;
  width: 40px;
  transform-style: preserve-3d;
  will-change: transform;
`;

/** .embla__ios-picker__slide */
export const IosPickerSlide = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  opacity: 0;
`;

/** .embla__ios-picker__label */
export const IosPickerLabel = styled.div`
  font-weight: 700;
  pointer-events: none;
`;
