import * as S from "./style";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

const CLIENT_ID = "d59bb3e2ca8b6bd01858bde6cbbe69a4";
const REDIRECT_URI = "http://localhost:5173/oauth/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
const grantType = "authorization_code";

interface AccessTokenResponse {
  access_token: string;
}
interface KakaoUserProfile {
  id: number;
  kakao_account: {
    profile: {
      nickname: string;
    };
  };
}
const Login = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";
  useEffect(() => {
    if (code) {
      if (code) {
        axios
          .post<null, AxiosResponse<AccessTokenResponse>>(
            `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            null,
            {
              headers: {
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res: AxiosResponse<AccessTokenResponse>) => {
            console.log(res);
            const { access_token } = res.data;
            axios
              .post<null, AxiosResponse<KakaoUserProfile>>(
                `https://kapi.kakao.com/v2/user/me`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${access_token}`,
                    "Content-type":
                      "application/x-www-form-urlencoded;charset=utf-8",
                  },
                }
              )
              .then((res: AxiosResponse<KakaoUserProfile>) => {
                console.log(res);
                console.log(res.data.kakao_account.profile.nickname);
              })
              .catch((error: unknown) => {
                console.error("Error fetching user profile:", error);
              });
          })
          .catch((error: unknown) => {
            console.error("Error fetching access token:", error);
          });
      }
    }
  }, [code]);
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.BtnBox>
        <S.OauthBtn
          className="button_login_google"
          onClick={() => {
            window.location.href =
              "https://accounts.google.com/o/oauth2/v2/auth";
          }}
        >
          <S.LogoIcon path="/oauth/google.png" />
          구글로 로그인
        </S.OauthBtn>
        <S.OauthBtn
          className="button_login_kakao"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          <S.LogoIcon path="/oauth/kakao.png" className="kakao" />
          카카오톡으로 로그인
        </S.OauthBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Login;
