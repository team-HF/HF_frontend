import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 1rem;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const CardContainer = styled.div`
  padding: 0.5rem;
  border: 1px solid #99999999;
  border-radius: 0.3125rem;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;
export const UpperContainer = styled.div`
  align-items: flex-start;
  gap: 0.875rem;
`;

export const ProfileIconContainer = styled.div`
  width: 3.1875rem;
  height: 3.1875rem;
  background-color: #f6f6f6;
  border-radius: 50%;
  margin-top: 1rem;
`;

export const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const UnderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  max-width: 12rem;
`;
