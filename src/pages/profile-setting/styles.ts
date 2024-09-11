import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 24.375rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 3.125rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.6875rem;
`;

export const ProfileIconContainer = styled.div`
  display: flex;
  width: 6.5625rem;
  position: relative;
  height: 6.5rem;
  background-color: #f6f6f6;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.6875rem;
`;

export const ProfileImage = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;
export const ProfileChangeButton = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 4.5rem;
  left: 4.5rem;
  background-color: #ffffff;
  border: 3px solid #f6f6f6;
  border-radius: 50%;
  cursor: pointer;
`;
export const FieldContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.8125rem;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5625rem;
`;

export const Label = styled.label`
  font-size: 0.8125rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: #999999;
`;

export const Input = styled.input`
  width: 20.125rem;
  height: 2.125rem;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #000000;

  &:focus {
    outline: none;
    border-color: #000000;
  }
`;
