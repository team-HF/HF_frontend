import * as S from "./style";
import { useEffect } from "react";
import kakaoOauth from "./api/kakaoOauth";
import googleOauth from "./api/googleOauth";

const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `${KAKAO_BASE_URL}/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&prompt=login`;
const GOOGLE_OAUTH_URL = import.meta.env.VITE_GOOGLE_OAUTH_URL;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const GOOGLE_AUTH_URL = `${GOOGLE_OAUTH_URL}&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;

const Login = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";
  const path = window.location.pathname;
  useEffect(() => {
    console.log(code);
    if (code) {
      (async () => {
        if (path === "/oauth/kakao") {
          await kakaoOauth(code);
        } else {
          await googleOauth(code);
        }
      })();
    }
  }, [code]);
  return (
    <S.Container>
      <S.BtnBox>
        <S.OauthBtn
          className="button_login_google"
          onClick={() => {
            window.location.href = GOOGLE_AUTH_URL;
          }}
        >
          <S.LogoIcon src="/oauth/google.png" />
          <S.BtnText className="button_login_google">
            Google로 계속하기
          </S.BtnText>
        </S.OauthBtn>
        <S.OauthBtn
          className="button_login_kakao"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <S.LogoIcon src="/oauth/kakao.png" className="kakao" />
          <S.BtnText className="button_login_kakao">Kakao로 계속하기</S.BtnText>
        </S.OauthBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Login;
