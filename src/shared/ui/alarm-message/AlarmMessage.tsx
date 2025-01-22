import * as S from "./style";

const AlarmMessage = () => {
  return (
    <S.Container>
      <S.Time>방금 전</S.Time>
      <S.Box className="align_center gap_8">
        <S.LogoImg src="/svg/logo-image.svg" />
        <S.Box className="column gap_4">
          <S.Title>매칭 신청</S.Title>
          <S.Content>1:1 매칭 신청이 들어왔습니다!</S.Content>
        </S.Box>
      </S.Box>
    </S.Container>
  );
};

export default AlarmMessage;
