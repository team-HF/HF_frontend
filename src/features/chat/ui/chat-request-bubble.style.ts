import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const Card = styled.div`
  width: 258px;
  height: 172px;
  padding: 10px 24px;
  border-radius: 0.5rem;
  border: 1px solid #cfc4fb;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.57%;
`;

export const Content = styled.div`
  flex-grow: 1;
  font-size: 12px;
  font-weight: bold;
  line-height: 133%;
  letter-spacing: -0.25%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  color: #1d1d1d;
`;

export const Value = styled.span`
  margin-left: 8px;
  color: #6541f2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Button = styled.button`
  background-color: #6541f2;
  &:hover {
    background-color: #5835d9;
  }
  color: #fff;
  border-radius: 34px;
  white-space: nowrap;
  cursor: pointer;
  width: 100px;
  height: 34px;
  gap: 6px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border: none;
`;
