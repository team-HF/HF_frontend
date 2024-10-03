import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './app/GlobalStyles.tsx';
import { worker } from './mocks/browser.ts';

if (process.env.NODE_ENV === 'development') {
  worker.start().then(() => {
    createRoot(document.getElementById('root')!).render(
      <div>
        <GlobalStyles />
        <App />
      </div>
    );
  });
} else {
  // 프로덕션에서 워커 없이 실행
  createRoot(document.getElementById('root')!).render(
    <div>
      <GlobalStyles />
      <App />
    </div>
  );
}
