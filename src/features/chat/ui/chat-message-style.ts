import styled, { css } from 'styled-components';

interface MessageWrapperProps {
  isMine: boolean;
}

interface MessageCardProps {
  isMine: boolean;
}

interface TimestampProps {
  isMine: boolean;
}

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
`;

export const MessageCard = styled.div<MessageCardProps>`
  padding: 8px;
  border-radius: 8px;
  max-width: 232px;
  word-wrap: break-word;
  position: relative;
  display: inline-block;

  ${(props) =>
    props.isMine
      ? css`
          background-color: #6541f2;
        `
      : css`
          background-color: #868e96;
        `}
`;

export const Timestamp = styled.span<TimestampProps>`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  position: absolute;
  ${(props) => (props.isMine ? 'right: 10px;' : 'left: 10px;')}
  color: #8E8E93;
`;
