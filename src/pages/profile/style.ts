import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 24.375rem;
  min-height: 100vh;
  margin-top: 0.6875rem;
  overflow-y: auto;
  position: relative;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 3.125rem;
`;

export const StyleH1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.625rem;
  color: #000000;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 6.5rem;
  height: 6.5rem;
  background-color: #f6f6f6;
  border-radius: 50%;
`;

export const ProfileImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProfileImage = styled.img<{ src: string | null }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const CameraIcon = styled.img`
  width: 2.5625rem;
  height: 2.0625rem;
`;

export const ProfileImageInput = styled.input`
  display: none;
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

export const SexContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
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

export const Arrow = styled.span`
  position: absolute;
  right: 0.8rem;
  top: 30%;
  font-size: 0.6875rem;
  color: #d9d9d9;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #999999;
  border-radius: 0.5rem;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  font-size: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #ff0000;
`;
