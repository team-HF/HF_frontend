import { styled } from "styled-components";
import { theme } from "../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const ProfileImageLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 7.5rem;
`;

export const DefaultUserImage = styled.img`
  border-radius: 50%;
  background-color: #f1f3f5;
  width: 120px;
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ProfileImage = styled.img<{ src: string | null }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const CameraIcon = styled.img`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 0.25rem;
`;

export const ProfileImageInput = styled.input`
  display: none;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.063rem;
  line-height: 1.412rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.625rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ededed;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${theme.colors.white};
  }
`;

export const PlaceHolder = styled.span`
  margin-top: 0.25rem;
  font-size: 0.688rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  color: #868e96;
`;

export const DateContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.625rem;
  .date_picker {
    border: 1px solid #dee2e6;
    padding: 0.625rem;
    height: 2.125rem;
    border-radius: 0.25rem;
    font-size: 0.938rem;
    line-height: 1.467rem;
    letter-spacing: -0.0096rem;
    &:focus {
      outline: none;
      border-color: ${theme.colors.main};
    }
  }
`;

export const SexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const genderBtn = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 0.375rem 0.625rem;
  border: ${({ selected }) => (selected ? 0 : "1px solid #dee2e6")};
  border-radius: 0.25rem;
  background-color: ${({ selected }) =>
    selected ? theme.colors.main : theme.colors.white};
  color: ${({ selected }) => (selected ? theme.colors.white : "#8E8E8E")};
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #ff0000;
`;

export const LocationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ResetBtn = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
  font-size: 0.75rem;
`;

export const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.25rem;
  max-height: 13.75rem;
  overflow: scroll;
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const LocationCard = styled.button`
  width: 9.875rem;
  padding: 0.375rem 0.25rem;
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  background-color: ${theme.colors.white};
  @media (min-width: 768px) {
    width: 9.625rem;
  }
`;

export const IntroductionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

export const IntroductionContent = styled.span<{ filled: boolean }>`
  padding: 0.625rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ededed;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  color: ${({ filled }) => (filled ? theme.colors.black : "#8E8E8E")};
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const IntroductionInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  padding: 0.625rem;
  background-color: #f8f8f8;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.019rem;
  font-weight: 600;
  &::placeholder {
    color: #8e8e8e;
  }
  &:focus {
    outline: none;
  }
`;

export const LengthChecker = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  font-size: 0.688rem;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  color: #8e8e8e;
`;

export const StoreBtn = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.main};
  margin-top: auto;
  margin: 40px 0;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  font-weight: 600;
`;
