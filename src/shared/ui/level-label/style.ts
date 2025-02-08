import styled from 'styled-components';

export const Container = styled.div<{ level: string }>`
  width: 31px;
  height: 16px;
  border-radius: 8px;
  padding: 3px 6px;
  gap: 10px;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: -0.5px;
  text-align: center;
  color: #ffffff;

  background: ${({ level }) =>
    level === '고수'
      ? 'linear-gradient(90.98deg, #1E90FF 0.84%, #6441F2 99.16%)'
      : 'linear-gradient(90deg, #8AE000 0%, #00BE9E 100%)'};
`;
