import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MatchingList from '../../features/my-page/ui/MatchingList';
import SaveList from '../../features/my-page/ui/SaveList';
import ProfileBox from '../../features/my-page/ui/ProfileBox';
import Tab from '../../entities/my-page/ui/Tab';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import LevelProgressBar from '../../features/my-page/ui/LevelProgressBar';
import * as S from './style';
import { useGetMyData } from '../../shared/api/useGetMyData';
import PageForm from '../../shared/ui/page-form/PageForm';
import CouponList from '../../features/my-page/ui/CouponList';
import NewHeader from '../../shared/ui/new-header/NewHeader';
import Loader from '../../shared/ui/loader/Loader';

const TAB_NAMES = {
  matching: '내 운동 매칭 List',
  bookmark: '즐겨찾기',
  gift: '선물함',
};

const getTabNameFromParam = (param: string): string => {
  switch (param) {
    case 'matching':
      return TAB_NAMES.matching;
    case 'bookmark':
      return TAB_NAMES.bookmark;
    case 'gift':
      return TAB_NAMES.gift;
    default:
      return TAB_NAMES.matching;
  }
};

const getTabParamFromName = (name: string): string => {
  switch (name) {
    case TAB_NAMES.matching:
      return 'matching';
    case TAB_NAMES.bookmark:
      return 'bookmark';
    case TAB_NAMES.gift:
      return 'gift';
    default:
      return 'matching';
  }
};

export default function MyPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParamFromUrl = searchParams.get('tab') || 'matching';
  const tabNameFromUrl = getTabNameFromParam(tabParamFromUrl);

  const [tab, setTab] = useState(tabNameFromUrl);
  const { data: myData, isLoading, isError } = useGetMyData();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setTab(getTabNameFromParam(tabParam));
    }
  }, [searchParams]);

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    const tabParam = getTabParamFromName(newTab);
    setSearchParams({ tab: tabParam });
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) return <p>Error</p>;

  const onClick = () => {
    navigate('/profile-setting');
  };
  const onClickBack = () => {
    navigate(-1);
  };

  const tabContent = () => {
    switch (tab) {
      case TAB_NAMES.matching:
        return (
          <S.MatchingContainer>
            <MatchingList />
          </S.MatchingContainer>
        );
      case TAB_NAMES.bookmark:
        return (
          <S.MatchingContainer>
            <SaveList />
          </S.MatchingContainer>
        );
      case TAB_NAMES.gift:
        return (
          <S.MatchingContainer>
            <CouponList />
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
    <PageForm isGNB={true}>
      <S.Container>
        <NewHeader title="마이페이지" isBackBtn onClickBack={onClickBack} />
        <ProfileBox myData={myData} />
        <LevelProgressBar myData={myData} />
        <S.LargeButtonWrapper>
          <LargeButton text="프로필 설정" onClick={onClick} />
        </S.LargeButtonWrapper>
        <Tab currentTab={tab} setTab={handleTabChange} />
        {tabContent()}
      </S.Container>
    </PageForm>
  );
}
