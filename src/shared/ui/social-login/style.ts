import styled from "styled-components";
import { socialLoginProps } from "./SocialLogin";

type buttonProps = Pick<socialLoginProps, "oauth">;

export const Container = styled.button<buttonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 51px;
  padding: 0px 30px;
  border: 0px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.oauth === "kakao" ? "#FEE500" : "#474747"};
`;
export const Logo = styled.img<{ src: string }>`
  width: 22px;
  height: 22px;
`;
export const Contents = styled.span<buttonProps>`
  color: ${(props) => (props.oauth === "kakao" ? "#1D1D1D" : "white")};
  font-size: 15px;
  font-weight: 700;
  width: 100%;
`;
