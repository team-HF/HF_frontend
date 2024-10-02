import MatchingBox from '../../entities/my-page/ui/MatchingBox';
import ProfileBox from '../../entities/my-page/ui/ProfileBox';
import Tab from '../../entities/my-page/ui/Tab';
import Dropdown from '../../shared/ui/dropdown/Dropdown';
import * as s from './style';
import { useState } from 'react';

export default function MyPage() {
  const [tab, setTab] = useState('내 운동 매칭 List');
  return (
    <s.Container style={{ marginLeft: '100px' }}>
      <Dropdown />
      <ProfileBox />
      <Tab currentTab={tab} setTab={setTab} />
      {tab === '내 운동 매칭 List' ? (
        <s.MatchingContainer>
          <s.MatchingTitle>나와 매칭된 새싹</s.MatchingTitle>
          <MatchingBox />
        </s.MatchingContainer>
      ) : (
        <div>저장된 List</div>
      )}
    </s.Container>
  );
}
