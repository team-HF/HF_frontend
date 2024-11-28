import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 1rem;
  @media (min-width: 768px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const CardContainer = styled.div<{ status: string }>`
  padding: 10px;
  border: 1px solid #99999999;
  border-radius: 0.3125rem;
  margin-bottom: 0.5rem;
  background-color: ${({ status }) =>
    status === 'FINISHED' ? '#E8E3FD' : 'transparent'};
`;
export const UpperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-bottom: 8px;
`;
export const UnderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #f6f6f6;
  border-radius: 50%;
  box-shadow: 0px 2px 8px 0px #0000001f;
  overflow: hidden;
  position: relative;
`;

export const ProfileIcon = styled.img`
  display: block;
  width: auto;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;

export const UserName = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const MiddleText = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledSvg = styled.img`
  margin-right: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DateText = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
`;
