import { useNavigate } from 'react-router-dom';
import MatchingBox from '../../entities/my-page/ui/MatchingBox';
import ProfileBox from '../../entities/my-page/ui/ProfileBox';
import Tab from '../../entities/my-page/ui/Tab';
import FooterNav from '../../shared/ui/footer-nav/FooterNav';
import Header from '../../shared/ui/header/Header';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import * as S from './style';
import { useState } from 'react';

export default function MyPage() {
  const [tab, setTab] = useState('내 운동 매칭 List');
  const navigation = useNavigate();
  const onClick = () => {
    navigation('/profile-setting');
  };
  return (
    <S.Container>
      <Header text="마이페이지" />
      <ProfileBox />
      <S.LargeButtonWrapper>
        <LargeButton text="프로필 설정" onClick={onClick} />
      </S.LargeButtonWrapper>
      <Tab currentTab={tab} setTab={setTab} />
      {tab === '내 운동 매칭 List' ? (
        <S.MatchingContainer>
          <S.MatchingTitle>나와 매칭된 새싹</S.MatchingTitle>
          <MatchingBox />
        </S.MatchingContainer>
      ) : (
        <div>저장된 List</div>
      )}
      <FooterNav />
    </S.Container>
  );
}
