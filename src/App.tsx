import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './app/theme';
import { ThemeProvider } from 'styled-components';
import ExerciseOption from './pages/my-page/ExerciseOption';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="exercise-option" element={<ExerciseOption />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
