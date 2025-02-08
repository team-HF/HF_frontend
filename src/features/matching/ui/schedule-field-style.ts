import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px 0px;
  border-radius: 34px;
  gap: 24px;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.01em;
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 216px;
  height: 34px;
  padding: 0 16px;
  border-radius: 34px;
  border: 1px solid #dee2e6;
`;

export const FieldInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 18px;
  margin-left: 8px;
  cursor: pointer;
`;
