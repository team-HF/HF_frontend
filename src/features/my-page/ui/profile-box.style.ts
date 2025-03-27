import { styled } from 'styled-components';
import { theme } from '../../../app/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-top: 0.75rem;
  width: 22.5rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
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
  width: 100%;
`;
export const ProfileIconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #f6f6f6;
  border-radius: 100%;
  margin-right: 0.875rem;
`;
export const ProfileIconWrapper = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: ${theme.shadows.shadow2};
  background-color: ${theme.colors.gray2};
`;
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  margin-bottom: 8px;
`;

export const ProfileName = styled.div`
  font-size: 0.9375rem;
  line-height: 1.125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
export const ProfileHashtagContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 0.3125rem;
  color: #ffffff;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const ProfileIntroduction = styled.div`
  font-size: 0.8125rem;
  line-height: 1.5rem;
`;

export const LevelWrapper = styled.div<{ $fitnessLevel: string }>`
  height: 18px;
  border-radius: 17px;
  padding: 3px 6px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.5px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: ${(props) =>
    props.$fitnessLevel === 'BEGINNER'
      ? 'linear-gradient(90deg, #8AE000 0%, #00BE9E 100%)'
      : 'linear-gradient(91.3deg, #6441F2 -17.11%, #1E90FF 138.78%)'};
`;
