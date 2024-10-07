import MatchingBox from '../../entities/my-page/ui/MatchingBox';
import ProfileBox from '../../entities/my-page/ui/ProfileBox';
import Tab from '../../entities/my-page/ui/Tab';
import Header from '../../shared/ui/header/Header';
import * as S from './style';
import { useState } from 'react';

export default function MyPage() {
  const [tab, setTab] = useState('내 운동 매칭 List');
  return (
    <S.Container>
      <Header text="프로필 입력" />
      <ProfileBox />
      <Tab currentTab={tab} setTab={setTab} />
      {tab === '내 운동 매칭 List' ? (
        <S.MatchingContainer>
          <S.MatchingTitle>나와 매칭된 새싹</S.MatchingTitle>
          <MatchingBox />
        </S.MatchingContainer>
      ) : (
        <div>저장된 List</div>
      )}
    </S.Container>
  );
}
