import { useState } from 'react';
import * as s from './tab-provider.style';

export default function Tab() {
  const [tab, setTab] = useState('내 운동 매칭 List');
  return (
    <s.Container>
      <s.TabContainer>
        <s.Tab onClick={() => setTab('내 운동 매칭 List')}>
          내 운동 매칭 List
          {tab === '내 운동 매칭 List' && <s.TabIndicator />}
        </s.Tab>
        <s.Tab onClick={() => setTab('저장 List')}>
          저장 List
          {tab === '저장 List' && <s.TabIndicator />}
        </s.Tab>
      </s.TabContainer>
      <s.StyleHr />
    </s.Container>
  );
}
