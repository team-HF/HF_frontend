import styled from 'styled-components';

export const EmblaContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 9999;

  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 40px 40px 0 0;
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
  @media (min-width: 768px) {
    width: 40rem;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
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
