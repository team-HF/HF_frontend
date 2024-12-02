import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchingList from '../../entities/my-page/ui/MatchingList';
import SaveList from '../../entities/my-page/ui/SaveList';
import GiftList from '../../entities/my-page/ui/GiftList';
import ProfileBox from '../../entities/my-page/ui/ProfileBox';
import Tab from '../../entities/my-page/ui/Tab';
import Header from '../../shared/ui/header/Header';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import LevelProgressBar from '../../entities/my-page/ui/LevelProgressBar';
import * as S from './style';
import { useGetMyData } from '../../shared/api/useGetMyData';

export default function MyPage() {
  const [tab, setTab] = useState('내 운동 매칭 List');
  const navigate = useNavigate();
  const { data: myData, isLoading, isError } = useGetMyData();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  const onClick = () => {
    navigate('/profile-setting');
  };

  const tabContent = () => {
    switch (tab) {
      case '내 운동 매칭 List':
        return (
          <S.MatchingContainer>
            <MatchingList />
          </S.MatchingContainer>
        );
      case '즐겨찾기':
        return (
          <S.MatchingContainer>
            <S.MatchingTitle />
            <SaveList />
          </S.MatchingContainer>
        );
      case '선물함':
        return (
          <S.MatchingContainer>
            <S.MatchingTitle />
            <GiftList />
          </S.MatchingContainer>
        );
      default:
        return (
          <S.MatchingContainer>
            <MatchingList />
          </S.MatchingContainer>
        );
    }
  };

  return (
    <S.Container>
      <Header text="마이페이지" />
      <ProfileBox myData={myData} />
      <LevelProgressBar myData={myData} />
      <S.LargeButtonWrapper>
        <LargeButton text="프로필 설정" onClick={onClick} />
      </S.LargeButtonWrapper>
      <Tab currentTab={tab} setTab={setTab} />
      {tabContent()}
    </S.Container>
  );
}
