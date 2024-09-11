import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './app/theme';
import { ThemeProvider } from 'styled-components';
import MyPage from './pages/my-page/MyPage';
import ExerciseOption from './pages/exercise-option/ExerciseOption';
import ProfileSetting from './pages/profile-setting/ProfileSetting';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="my-page" element={<MyPage />} />
          <Route path="exercise-option" element={<ExerciseOption />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
