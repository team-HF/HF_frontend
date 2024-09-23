import * as s from './matching-box.style';
import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import Button from '../../../shared/ui/button/Button';

export default function MatchingBox() {
  return (
    <s.Container>
      <s.UpperContainer>
        <s.ProfileIconContainer>
          <s.ProfileIcon
            src="/svg/default-profile-icon.svg"
            alt="default-profile"
          />
        </s.ProfileIconContainer>
        <s.ProfileTextContainer>
          <s.UserName>유저 1</s.UserName>
          <span>n회 매칭됨</span>
          <span>서울특별시 종로구</span>
        </s.ProfileTextContainer>
      </s.UpperContainer>
      <s.UnderContainer>
        <s.HashtagContainer>
          <Hashtag text="#소규모형" />
          <Hashtag text="#귀차니즘형" />
          <Hashtag text="#기능성피트니스위주" />
        </s.HashtagContainer>
        <Button
          width="9rem"
          height="2.4375rem"
          color="main"
          text="1:1 채팅하기"
        />
      </s.UnderContainer>
    </s.Container>
  );
}
