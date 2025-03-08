import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  border: 1px dashed #adb5bd;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.01px;
  letter-spacing: -0.0025em;
  text-align: center;
  color: #adb5bd;
`;

export const Button = styled.button`
  width: 96px;
  height: 34px;
  padding: 8px 10px;
  background-color: #6541f2;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  white-space: nowrap;
`;
