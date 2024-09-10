import * as s from './tab-provider.style';

type TabProps = {
  currentTab: string;
  setTab: (tab: string) => void;
};

export default function Tab({ currentTab, setTab }: TabProps) {
  return (
    <s.Container>
      <s.TabContainer>
        <s.Tab onClick={() => setTab('내 운동 매칭 List')}>
          내 운동 매칭 List
          {currentTab === '내 운동 매칭 List' && <s.TabIndicator />}
        </s.Tab>
        <s.Tab onClick={() => setTab('저장 List')}>
          저장 List
          {currentTab === '저장 List' && <s.TabIndicator />}
        </s.Tab>
      </s.TabContainer>
      <s.StyleHr />
    </s.Container>
  );
}
