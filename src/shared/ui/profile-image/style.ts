import styled from "styled-components";

export const ProfileImage = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 120px;
  width: 120px;
  height: 120px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.08),
    0px 0px 1px rgba(0, 0, 0, 0.08);
`;
export const Label = styled.label`
  position: absolute;
  top: 88px;
  left: 88px;
  border: 0px;
  border-radius: 34px;
  width: 24px;
  height: 24px;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 0px 1px rgba(0, 0, 0, 0.08);
`;
export const UploadImageBtn = styled.input`
  display: none;
`;
