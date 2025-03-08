import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: center;
  justify-self: center;
  background-color: #f1f3f5;
`;
export const UpperWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const CopyRight = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.31%;
  margin-top: 8px;
  color: #868e96;
`;

export const UnderWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UnderText = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 22.01px;
  letter-spacing: -0.96%;
  color: '#000000';
`;
export const divider = styled.span`
  position: relative;
  padding: 0 10px;
  margin-top: 2px;

  .divider::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 20px;
    background-color: #ccc;
  }
`;
