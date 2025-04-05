import * as S from './tab-provider.style';

type TabProps = {
  currentTab: string;
  setTab: (tab: string) => void;
};

export default function Tab({ currentTab, setTab }: TabProps) {
  const tabs = ['내 운동 매칭 List', '즐겨찾기', '선물함'];

  return (
    <S.Container>
      <S.TabContainer>
        {tabs.map((tabName) => (
          <S.Tab key={tabName} onClick={() => setTab(tabName)}>
            {tabName}
            {currentTab === tabName && <S.TabIndicator />}
          </S.Tab>
        ))}
      </S.TabContainer>
      <S.StyleHr />
    </S.Container>
  );
}
