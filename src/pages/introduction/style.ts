import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5rem;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const TextWrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 15rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  border: 1px solid #ededed;
  gap: 0.625rem;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  background-color: #f8f8f8;
  &:focus {
    border: none;
    outline: none;
  }
  &:placeholder {
    color: #1d1d1d;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0.0187rem;
  }
`;
export const CountingTextLengthWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 0.875rem;
  color: #666;
`;
export const CountingText = styled.div`
  font: ${({ theme }) => theme.fontSize.cation_2};
  font-size: 0.6875rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  margin-bottom: 2.5rem;
`;
