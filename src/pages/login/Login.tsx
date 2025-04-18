import * as S from "./style";

const KAKAO_OAUTH_URL = import.meta.env.VITE_KAKAO_OAUTH_URL;
const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_AUTHORIZATION_CODE_URL = `${KAKAO_OAUTH_URL}/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&prompt=login`;

const GOOGLE_OAUTH_URL = import.meta.env.VITE_GOOGLE_OAUTH_URL;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const GOOGLE_AUTHORIZATION_CODE_URL = `${GOOGLE_OAUTH_URL}&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;

const Login = () => {
  return (
      <S.Container>
        <S.BtnBox>
          <S.OauthBtn
            className="button_login_google"
            onClick={() =>
              (window.location.href = GOOGLE_AUTHORIZATION_CODE_URL)
            }
          >
            <S.LogoIcon src="/oauth/google.png" />
            <S.BtnText className="button_login_google">
              Google로 계속하기
            </S.BtnText>
          </S.OauthBtn>
          <S.OauthBtn
            className="button_login_kakao"
            onClick={() =>
              (window.location.href = KAKAO_AUTHORIZATION_CODE_URL)
            }
          >
            <S.LogoIcon src="/oauth/kakao.png" className="kakao" />
            <S.BtnText className="button_login_kakao">
              Kakao로 계속하기
            </S.BtnText>
          </S.OauthBtn>
        </S.BtnBox>
      </S.Container>
  );
};

export default Login;
