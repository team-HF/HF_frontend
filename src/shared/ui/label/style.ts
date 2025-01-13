import styled from 'styled-components';

interface LabelContainerProps {
  $borderColor: string;
  $backgroundColor?: string;
  radius: '24px' | '4px';
  $width: number;
}

interface LabelTextProps {
  $fontColor?: string;
}

export const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width};
  height: 22px;
  border-radius: ${(props) => props.radius};
  padding: 0.375rem;
  gap: 0.625rem;
  border: 1px solid ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor || '#fff'};
`;

export const LabelText = styled.span<LabelTextProps>`
  height: 0.625rem;
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 0.625rem;
  letter-spacing: -0.0031rem;
  color: ${(props) => props.$fontColor || '#000'};
`;
