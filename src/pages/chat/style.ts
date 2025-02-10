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
  gap: 16px;
`;

export const MessageWrapper = styled.div<{ $isMine: boolean }>`
  display: flex;
  justify-content: ${({ $isMine }) => ($isMine ? 'flex-end' : 'flex-start')};
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
