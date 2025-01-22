import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 8px 0px 16px 0px;
  box-sizing: border-box;
  margin-bottom: 8px;
  border-bottom: 2px solid #f1f3f5;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ImageWrapper = styled.div<{ $profileImageUrl?: string | null }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 0px #00000014, 0px 1px 4px 0px #00000014,
    0px 2px 8px 0px #0000001f;
  background: ${({ $profileImageUrl }) =>
    $profileImageUrl
      ? `url(${$profileImageUrl}) center/cover no-repeat`
      : '#fff'};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const NameAndLevelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyleName = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.01px;
  letter-spacing: -0.0002em;
  margin-right: 4px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

export const StyleLocationSvg = styled.img`
  width: 18px;
  height: 18px;
`;

export const StyleLocationAddress = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
`;
