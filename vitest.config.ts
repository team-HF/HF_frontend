import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__test__/setup.ts'],
    silent: false,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
  },
});
