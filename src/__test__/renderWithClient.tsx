import { render } from '@testing-library/react';
import { createTestQueryClient } from './createTestQueryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../app/theme';

const renderWithClient = (children: ReactElement) => {
  const client = createTestQueryClient();
  render(
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default renderWithClient;
