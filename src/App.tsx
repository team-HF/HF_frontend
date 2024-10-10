import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./app/theme";
import { ThemeProvider } from "styled-components";
import MyPage from "./pages/my-page/MyPage";
import ExerciseOption from "./pages/exercise-option/ExerciseOption";
import ProfileSetting from "./pages/profile-setting/ProfileSetting";
import Profile from "./pages/profile/Profile";
import PostDetail from "./pages/post-detail/PostDetail";
import Community from "./pages/community/Community";
import PostRegister from "./pages/post-register/PostRegister";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="my-page" element={<MyPage />} />
          <Route path="register/exercise-option" element={<ExerciseOption />} />
          <Route path="register/profile" element={<Profile />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="community" element={<Community />} />
          <Route path="community/post-detail/:id" element={<PostDetail />} />
          <Route path="community/post-register" element={<PostRegister />} />
          <Route path="login/:oauth" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
