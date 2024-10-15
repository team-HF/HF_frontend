import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./app/theme";
import { ThemeProvider } from "styled-components";
import MyPage from "./pages/my-page/MyPage";
import ExerciseOption from "./pages/exercise-option/ExerciseOption";
import ProfileSetting from "./pages/profile-setting/ProfileSetting";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Introduction from "./pages/introduction/Introduction";
import Community from "./pages/community/Community";
import PostRegister from "./pages/post-register/PostRegister";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/:oauth" element={<Login />} />
          <Route path="my-page" element={<MyPage />} />
          <Route path="register/exercise-option" element={<ExerciseOption />} />
          <Route path="register/profile" element={<Profile />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route
            path="/profile-setting/introduction"
            element={<Introduction />}
          />
          <Route path="community" element={<Community />} />
          <Route path="community/post-register" element={<PostRegister />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
