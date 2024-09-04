import styled from "styled-components";
import { theme } from "../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const LoginTitle = styled.h1`
  position: relative;
  top : 15vh;
  ${theme.fontSize.title_1};
`;
export const BtnBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;
export const OauthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342px;
  height: 44px;
  border: 0px;
  border-radius: 10px;
  color: ${theme.font.colors.black};
  ${theme.fontSize.body_2_bold}
  &.button_login_google {
    border: 1px solid #c7c7c7;
    background-color: ${theme.font.colors.white};
    margin-bottom: 20px;
  }
  &.button_login_kakao {
    background-color: #fae100;
  }
`;
export const LogoIcon = styled.div<{ path: string }>`
  background-image: url(${props => props.path});
  width: 19px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
  &.kakao {
    height: 16px;
  }
`;
