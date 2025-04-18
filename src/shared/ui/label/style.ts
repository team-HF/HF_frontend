import styled from 'styled-components';

interface LabelContainerProps {
  $borderColor: string;
  $backgroundColor?: string;
  radius: '24px' | '4px';
  width: number;
  height: number;
  $clickalbe?: boolean;
}

interface LabelTextProps {
  $fontColor?: string;
}

export const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => props.radius};
  padding: 0.375rem;
  gap: 0.625rem;
  border: 1px solid ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor || '#fff'};
  white-space: nowrap;
  cursor: ${(props) => (props.$clickalbe ? 'pointer' : 'default')};
`;

export const LabelText = styled.span<LabelTextProps>`
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: -0.0025em;
  color: ${(props) => props.$fontColor || '#000'};
`;
