import styled from 'styled-components';
import { theme } from '../../app/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
<<<<<<< HEAD
=======
export const LoginTitle = styled.h1`
  position: relative;
  top: 15vh;
  ${theme.fontSize.title_1};
`;
>>>>>>> dev
export const BtnBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 40rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
export const OauthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 0.5rem;
  &.button_login_google {
    background-color: #474747;
=======
  width: 342px;
  height: 44px;
  border: 0px;
  border-radius: 10px;
  color: ${theme.colors.black};
  ${theme.fontSize.heading_1}
  &.button_login_google {
    border: 1px solid #c7c7c7;
    background-color: ${theme.colors.white};
    margin-bottom: 20px;
>>>>>>> dev
  }
  &.button_login_kakao {
    background-color: #fae100;
  }
`;
export const LogoIcon = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  width: 19px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &.kakao {
    height: 16px;
  }
`;
export const BtnText = styled.span`
  width: 15.75rem;
  font-size: 0.938rem;
  font-weight: 700;
  line-height: 1.467rem;
  letter-spacing: -0.01rem;
  &.button_login_google {
    color: ${theme.colors.white};
  }
  &.button_login_kakao {
    color: ${theme.colors.black};
  }
`;
