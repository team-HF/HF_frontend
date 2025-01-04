import styled from 'styled-components';

export const EmblaContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: 30rem;
  height: 40%;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    content: '';
    display: block;
    height: calc(50% - 32px / 2);
    z-index: 1;
    pointer-events: none;
    border-radius: 40px 40px 0 0;
  }

  &::before {
    top: -0.5px;
    border-bottom: 0.5px solid rgba(var(--text-high-contrast-rgb-value), 0.3);
    background: linear-gradient(
      to top,
      rgba(var(--background-site-rgb-value), 0.65) 0%,
      rgba(var(--background-site-rgb-value), 1) 100%
    );
  }

  &::after {
    bottom: -0.5px;
    border-top: 0.5px solid rgba(var(--text-high-contrast-rgb-value), 0.3);
    background: linear-gradient(
      to bottom,
      rgba(var(--background-site-rgb-value), 0.65) 0%,
      rgba(var(--background-site-rgb-value), 1) 100%
    );
  }
`;

export const PickerWrapper = styled.div`
  display: flex;
  margin-top: 45px;
  flex: 1;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: 20px;
`;
