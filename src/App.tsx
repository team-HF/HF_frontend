import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { theme } from './app/theme';
import MyPage from './pages/my-page/MyPage';
import ExerciseOption from './pages/exercise-option/ExerciseOption';
import ProfileSetting from './pages/profile-setting/ProfileSetting';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Introduction from './pages/introduction/Introduction';
import Community from './pages/community/Community';
import ChatLobby from './pages/chat-lobby/ChatLobby';
import PostRegister from './pages/post-register/PostRegister';
import PostDetail from './pages/post-detail/PostDetail';
import ExerciseStyle from './pages/exercise-style/ExerciseStyle';
import Matching from './pages/matching/Matching';
import MatchingReview from './pages/matching-review/MatchingReview';
import UserProfile from './pages/user-profile/UserProfile';
import ProfileSearch from './pages/profile-serch/ProfileSearch';
import SearchResult from './pages/search-result/SearchResult';
import NotFound from './pages/not-found/NotFound';
import Agreement from './pages/agreement/Agreement';
import { Chat } from './pages/chat/Chat';
import { SocketProvider } from './app/providers/SocketProvider';
import { SubscriptionProvider } from './app/providers/SubscriptionProvider';
import { useGetMyData } from './shared/api/useGetMyData';
import { useAccountExpiresStore } from './shared/store/account-expires-store';
import Alert from './shared/ui/alert/Alert';
import { useMyProfileStore } from './shared/store/my-profile-store';
import Loader from './shared/ui/loader/Loader';
import ResetProfileEditStoreOnExit from './features/my-page/providers/ useResetProfileEditStoreOnExit';

function App() {
  const navigate = useNavigate();
  const { data: myData, isLoading } = useGetMyData();
  const { setMyProfile } = useMyProfileStore();
  const accessToken = Cookies.get('access_token');

  const isLoggedIn = Boolean(accessToken && myData?.memberId);

  const {
    expiresModalOpen,
    requireModalOpen,
    setExpiresModalOpen,
    setRequireModalOpen,
  } = useAccountExpiresStore();

  const navigateLogin = () => {
    if (expiresModalOpen) setExpiresModalOpen(false);
    if (requireModalOpen) setRequireModalOpen(false);
    navigate('/login');
  };

  const closeAccountModal = () => {
    setRequireModalOpen(false);
  };

  useEffect(() => {
    if (myData) {
      setMyProfile(myData);
    }
  }, [myData, setMyProfile]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* 비로그인 및 로그인 상태 모두 접근 가능한 경로 */}
        <Route
          element={
            isLoggedIn ? (
              <SocketProvider memberId={myData!.memberId}>
                <SubscriptionProvider
                  onNewChatroom={(newChatroomId: number) => {
                    navigate(`/chat/${newChatroomId}`);
                  }}
                >
                  <Outlet />
                </SubscriptionProvider>
              </SocketProvider>
            ) : (
              <Outlet />
            )
          }
        >
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/post-detail/:id" element={<PostDetail />} />
          <Route path="/member/:id/profile" element={<UserProfile />} />
          <Route path="/" element={<ProfileSearch />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Route>

        {/* 로그인 상태에서만 접근 가능한 경로 */}
        <Route
          element={
            isLoggedIn ? (
              <SocketProvider memberId={myData!.memberId}>
                <SubscriptionProvider
                  onNewChatroom={(newChatroomId: number) => {
                    navigate(`/chat/${newChatroomId}`);
                  }}
                >
                  <Outlet />
                </SubscriptionProvider>
              </SocketProvider>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/profile-setting">
            <Route index element={<ProfileSetting />} />
            <Route path="exercise-style" element={<ExerciseStyle />} />
            <Route path="introduction" element={<Introduction />} />
          </Route>
          <Route path="/chat-lobby" element={<ChatLobby />} />
          <Route path="/chat/:chatRoomId" element={<Chat />} />
          <Route path="/community/post-register" element={<PostRegister />} />
          <Route path="/community/post-update/:id" element={<PostRegister />} />
          <Route path="/matching/:id" element={<Matching />} />
          <Route path="/matching-review" element={<MatchingReview />} />
        </Route>

        {/* 비로그인 상태에서만 접근 가능한 경로 */}
        <Route path="/login" element={<Login />} />
        <Route path="/register/exercise-style" element={<ExerciseOption />} />
        <Route path="/register/profile" element={<Profile />} />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ResetProfileEditStoreOnExit />

      {expiresModalOpen && (
        <Alert
          title="로그인"
          content={['인증 세션이 만료되었습니다.', '다시 로그인하세요.']}
          confirm={navigateLogin}
          cancelBtn={false}
        />
      )}
      {requireModalOpen && (
        <Alert
          title="로그인"
          content={[
            '로그인 후 이용하실 수 있습니다.',
            '로그인 페이지로 이동하시겠습니까?',
          ]}
          confirm={navigateLogin}
          cancelBtn={true}
          cancel={closeAccountModal}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
