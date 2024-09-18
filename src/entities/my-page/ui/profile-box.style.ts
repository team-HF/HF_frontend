import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-top: 0.75rem;
  padding: 0 2rem;
  max-width: 24.375rem;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  align-items: center;
`;
export const HeaderText = styled.div`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.125rem;
  margin-left: auto;
  margin-right: auto;
`;
export const BellIcon = styled.img`
  width: 1.125rem;
  height: 1.25rem;
  cursor: pointer;
  margin-right: 0.875rem;
`;

export const MenuIcon = styled.img`
  width: 1.125rem;
  height: 0.875rem;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.75rem;
`;
export const ProfileIconContainer = styled.div`
  width: 4.5625rem;
  height: 4.5625rem;
  background-color: #f6f6f6;
  border-radius: 100%;
  margin-right: 0.875rem;
`;

export const ProfileTextContainer = styled.div``;

export const ProfileName = styled.div`
  font-size: 0.9375rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.3125rem;
`;

export const ProfileHashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.3125rem;
  color: #ffffff;
  gap: 0.25rem;
`;

export const ProfileIntroduction = styled.div`
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;
