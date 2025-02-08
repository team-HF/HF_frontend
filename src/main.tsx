import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './app/GlobalStyles.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </div>
);
