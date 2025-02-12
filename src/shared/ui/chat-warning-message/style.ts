import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 68px;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 0 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 40rem;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;

export const StyleSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.01px;
  letter-spacing: -0.0025em;
  text-align: center;
  color: #adb5bd;
  white-space: nowrap;
`;
export const MiddleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyleSvg = styled.img`
  position: absolute;
  right: -6px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 0;
  }
`;
