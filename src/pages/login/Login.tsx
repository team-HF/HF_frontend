import * as S from "./style";
import { useEffect } from "react";
import kakaoOauth from "./api/kakaoOauth";

const KAKAO_BASE_URL = import.meta.env.VITE_KAKAO_BASE_URL;
const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `${KAKAO_BASE_URL}/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&prompt=login`;
const GOOGLE_BASE_URL = import.meta.env.VITE_GOOGLE_BASE_URL;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const GOOGLE_AUTH_URL = `${GOOGLE_BASE_URL}?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&response_type=token&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;

const Login = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";
  useEffect(() => {
    (async () => {
      await kakaoOauth(code)
    })();
  }, [code]);
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.BtnBox>
        <S.OauthBtn
          className="button_login_google"
          onClick={() => {
            window.location.href = GOOGLE_AUTH_URL;
          }}
        >
          <S.LogoIcon src="/oauth/google.png" />
          구글로 로그인
        </S.OauthBtn>
        <S.OauthBtn
          className="button_login_kakao"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <S.LogoIcon src="/oauth/kakao.png" className="kakao" />
          카카오톡으로 로그인
        </S.OauthBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Login;
