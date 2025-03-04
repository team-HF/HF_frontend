import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { theme } from './app/theme';
import { ThemeProvider } from 'styled-components';
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
import { Chat } from './pages/chat/Chat';
import { SocketProvider } from './app/providers/SocketProvider';
import { SubscriptionProvider } from './app/providers/SubscriptionProvider';
import { useGetMyData } from './shared/api/useGetMyData';
import SearchResult from './pages/search-result/SearchResult';
import NotFound from './pages/not-found/NotFound';
import Cookies from 'js-cookie';

const LoginLayout = () => {
  const navigate = useNavigate();
  const { data: myData, isLoading } = useGetMyData();
  const accessToken = Cookies.get('access_token');

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!accessToken || !myData?.memberId) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SocketProvider memberId={myData.memberId}>
      <SubscriptionProvider
        onNewChatroom={(newChatroomId: number) => {
          navigate(`/chat/${newChatroomId}`);
        }}
      >
        <Outlet />
      </SubscriptionProvider>
    </SocketProvider>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/exercise-style" element={<ExerciseOption />} />
        <Route path="/register/profile" element={<Profile />} />

        <Route element={<LoginLayout />}>
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/profile-setting">
            <Route index element={<ProfileSetting />} />
            <Route path="exercise-style" element={<ExerciseStyle />} />
            <Route path="introduction" element={<Introduction />} />
          </Route>
          <Route path="/chat-lobby" element={<ChatLobby />} />
          <Route path="/chat/:chatRoomId" element={<Chat />} />
          <Route path="community" element={<Community />} />
          <Route path="community/post-register" element={<PostRegister />} />
          <Route path="community/post-update/:id" element={<PostRegister />} />
          <Route path="community/post-detail/:id" element={<PostDetail />} />
          <Route path="/matching/:id" element={<Matching />} />
          <Route path="/matching-review" element={<MatchingReview />} />
          <Route path="member/:id/profile" element={<UserProfile />} />
          <Route path="/" element={<ProfileSearch />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
