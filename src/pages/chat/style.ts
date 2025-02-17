import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 40rem;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 640px;
`;

export const MessageWrapper = styled.div<{ $isMine: boolean }>`
  display: flex;
  justify-content: ${({ $isMine }) => ($isMine ? 'flex-end' : 'flex-start')};
  margin-top: 8px;
`;

export const RowBox = styled.div<{ $isMine: boolean }>`
  display: flex;
  align-items: flex-end;
`;

export const ChatMessage = styled.div<{ $isMine: boolean }>`
  max-width: 232px;
  min-height: 32px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ $isMine }) => ($isMine ? '#6541F2' : '#868E96')};
  color: #fff;
`;

export const ChatTime = styled.div<{ $isMine: boolean }>`
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.31%;
  color: #8e8e93;
  /* 내가 보낸 메시지($isMine=true)는 왼쪽(DOM에서 먼저 배치) => 오른쪽에 마진
     상대방 메시지($isMine=false)는 오른쪽(DOM에서 나중 배치) => 왼쪽에 마진 */
  margin-right: ${({ $isMine }) => ($isMine ? '8px' : '0')};
  margin-left: ${({ $isMine }) => ($isMine ? '0' : '8px')};
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  height: 36px;
  gap: 10px;
  border-radius: 8px;
  border-width: 1px;
  padding: 10px;
  background-color: #f8f8f8;
  border: 1px solid #ededed;
`;

export const Input = styled.input`
  border: none;
  background-color: inherit;
  height: 16px;
  flex: 1;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const SendButton = styled.img`
  cursor: pointer;
`;

export const DateLine = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  color: #999;
  font-size: 12px;
  white-space: nowrap;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ddd;
  }

  &::before {
    margin-right: 8px;
  }

  &::after {
    margin-left: 8px;
  }
`;

export const CustomScroller = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;
