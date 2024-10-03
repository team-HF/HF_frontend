import * as S from './style';

export default function FooterNav() {
  return (
    <S.Container>
      <S.PencilIcon src="svg/pencil-icon.svg" alt="write" />
      <S.HomeIcon src="svg/home-icon.svg" alt="home" />
      {/* MyPageIcon 파일 수정해야 함 */}
      <S.MyPageIcon src="svg/my-icon.png" alt="my-page" />
    </S.Container>
  );
}
