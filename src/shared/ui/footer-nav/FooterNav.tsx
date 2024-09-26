import * as s from './style';

export default function FooterNav() {
  return (
    <s.Container>
      <s.PencilIcon src="svg/pencil-icon.svg" alt="write" />
      <s.HomeIcon src="svg/home-icon.svg" alt="home" />
      {/* MyPageIcon 파일 수정해야 함 */}
      <s.MyPageIcon src="svg/my-icon.png" alt="my-page" />
    </s.Container>
  );
}
