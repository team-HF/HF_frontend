import Button from '../../shared/ui/button/Button';
import * as s from './styles';

export default function ProfileSetting() {
  return (
    <s.Container>
      <s.TitleContainer>프로필 설정</s.TitleContainer>
      <s.ProfileIconContainer>
        <s.ProfileImage
          src="/svg/default-profile-icon.svg"
          alt="default-profile"
        />
        <s.ProfileChangeButton />
      </s.ProfileIconContainer>
      <s.FieldContainer>
        <s.Field>
          <s.Label>이름</s.Label>
          <s.Input />
        </s.Field>

        <s.Field>
          <s.Label>닉네임</s.Label>
          <s.Input />
        </s.Field>

        <s.Field>
          <s.Label>휴대폰 번호</s.Label>
          <s.Input />
        </s.Field>

        <s.Field>
          <s.Label>내 정보</s.Label>
          <s.Input />
        </s.Field>

        <s.Field>
          <s.Label>한줄 소개</s.Label>
          <s.Input />
        </s.Field>

        <s.Field>
          <s.Label>운동 스타일 변경</s.Label>
          <s.Input />
        </s.Field>
      </s.FieldContainer>
      <s.ButtonContainer>
        <Button width="20.125rem" height="2.8125rem" color="main" text="저장" />
      </s.ButtonContainer>
    </s.Container>
  );
}
