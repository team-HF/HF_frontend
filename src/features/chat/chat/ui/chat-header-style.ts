import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 360px;
  height: 46px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1200px) {
    width: 1080px;
  }
`;
export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyleBackButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const StyleName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.0057em;
  margin-right: 4px;
`;
export const StyleMenu = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 2px;
`;
