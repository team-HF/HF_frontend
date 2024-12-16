import * as S from './tab-provider.style';

type TabProps = {
  currentTab: string;
  setTab: (tab: string) => void;
};

export default function Tab({ currentTab, setTab }: TabProps) {
  return (
    <S.Container>
      <S.TabContainer>
        <S.Tab onClick={() => setTab('내 운동 매칭 List')}>
          내 운동 매칭 List
          {currentTab === '내 운동 매칭 List' && <S.TabIndicator />}
        </S.Tab>
        <S.Tab onClick={() => setTab('즐겨찾기')}>
          즐겨찾기
          {currentTab === '즐겨찾기' && <S.TabIndicator />}
        </S.Tab>
        <S.Tab onClick={() => setTab('선물함')}>
          선물함
          {currentTab === '선물함' && <S.TabIndicator />}
        </S.Tab>
      </S.TabContainer>
      <S.StyleHr />
    </S.Container>
  );
}
