import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './app/theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route
              path="/register/exercise-style"
              element={<ExerciseOption />}
            />
            <Route path="/register/profile" element={<Profile />} />
            <Route path="/profile-setting">
              <Route index element={<ProfileSetting />} />
              <Route path="exercise-style" element={<ExerciseStyle />} />
              <Route path="introduction" element={<Introduction />} />
            </Route>

            <Route path="/chat-lobby" element={<ChatLobby />} />
            <Route path="community" element={<Community />} />
            <Route path="community/post-register" element={<PostRegister />} />
            <Route path="community/post-detail/:id" element={<PostDetail />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/matching-review" element={<MatchingReview />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
