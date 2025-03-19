import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const LevelProgressAndMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LevelWrapper = styled.div`
  display: flex;
  justify-items: center;
  margin-bottom: 4px;
  gap: 1px;
`;

export const Level = styled.div<{ $fitnessLevel: string; $isActive: boolean }>`
  width: 64px;
  height: 24px;
  background: ${(props) =>
    props.$isActive
      ? props.$fitnessLevel === 'BEGINNER'
        ? 'linear-gradient(90deg, #8AE000 0%, #00BE9E 100%)'
        : 'linear-gradient(91.3deg, #6441F2 -17.11%, #1E90FF 138.78%)'
      : '#ADB5BD'};
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  color: #ffffff;

  @media (min-width: 768px) {
    /* 태블릿 세로 방향 */
    width: 126px;
  }

  &:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  &:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const StyledMessage = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  align-self: end;
  color: #868e96;
`;
