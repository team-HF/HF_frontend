import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './app/theme';
import { ThemeProvider } from 'styled-components';
import MyPage from './pages/my-page/MyPage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="my-page" element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
