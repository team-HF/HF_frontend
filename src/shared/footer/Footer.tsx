import * as S from "./footer.style";

interface FooterProps {
  isGNB: boolean;
}

export default function Footer({ isGNB }: FooterProps) {
  return (
    <S.Container $isGNB={isGNB}>
      <S.UpperWrapper>
        <S.Logo>
          <span style={{ color: "#6541F2" }}>H</span>ealth
          <span style={{ color: "#6541F2" }}>F</span>riend
        </S.Logo>
        <S.CopyRight>(C) Health Friend.All rights reserved.</S.CopyRight>
      </S.UpperWrapper>
      <S.UnderWrapper>
        <S.UnderText>서비스 이용 약관</S.UnderText>
        <S.divider style={{ color: "#DEE2E6" }}>ㅣ</S.divider>
        <S.UnderText>개인정보 처리방침</S.UnderText>
      </S.UnderWrapper>
    </S.Container>
  );
}
