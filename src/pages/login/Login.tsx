import * as S from "./style";

const Login = () => {
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>

      <S.BtnBox>
        <S.OauthBtn className="button_login_google">
          <S.LogoIcon path="public/oauth/google.png" />
          구글로 로그인
        </S.OauthBtn>
        <S.OauthBtn className="button_login_kakao">
          <S.LogoIcon path="public/oauth/kakao.png" className="kakao" />
          카카오톡으로 로그인
        </S.OauthBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Login;
