import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.125rem;
  height: auto;
  border: 1px solid #99999999;
  border-radius: 0.3125rem;
  padding: 0.5rem;
  gap: 1rem;
`;

export const UpperContainer = styled.div`
  display: flex;
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
