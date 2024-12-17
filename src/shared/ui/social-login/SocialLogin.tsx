import * as S from "./style";

type oauthName = "kakao" | "google";

export interface socialLoginProps {
  oauth: oauthName;
  logoPath: string;
}

const SocialLogin = ({ oauth, logoPath }: socialLoginProps) => {
  return (
    <S.Container oauth={oauth}>
      <S.Logo src={logoPath} />
      <S.Contents oauth={oauth}>
        {oauth === "kakao" ? "Kakao로 계속하기" : "Google로 계속하기"}
      </S.Contents>
    </S.Container>
  );
};

export default SocialLogin;
