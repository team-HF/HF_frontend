import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import UpdateMyDataButton from './UpdateMyDataButton';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTestQueryClient } from '../../../__test__/createTestQueryClient';

const mockMutate = vi.fn();
const mockNavigate = vi.fn();
const mockUseGetMyData = vi.fn();

vi.mock('../api/usePatchMyData', () => ({
  usePatchMyData: () => ({
    mutate: mockMutate,
  }),
}));

vi.mock('../../../shared/api/useGetMyData', () => ({
  useGetMyData: () => mockUseGetMyData(),
}));

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const setup = (props = {}) => {
  const client = createTestQueryClient();
  render(
    <QueryClientProvider client={client}>
      <UpdateMyDataButton
        nickname="테스트"
        cd1="10"
        cd2="610"
        cd3="520"
        disabled={false}
        styleSelected="SMALL"
        habitSelected="EAGER"
        goalSelected="BULK_UP"
        exerciseSelected="HIGH_STRESS"
        introduction="test"
        {...props}
      />
    </QueryClientProvider>
  );
};
describe('UpdateMyDataButton', () => {
  beforeEach(() => {
    mockUseGetMyData.mockReset();
    mockMutate.mockClear();
    mockNavigate.mockClear();

    mockUseGetMyData.mockReturnValue({
      data: { memberId: 1 },
      isLoading: false,
    });

    mockMutate.mockImplementation((_data, options) => {
      options?.onSuccess?.({});
    });
  });
  describe('UpdateMyDataButton', () => {
    test('로딩 중엔 Loader만 보인다', () => {
      mockUseGetMyData.mockReturnValue({ data: undefined, isLoading: true });
      setup();
      expect(
        screen.queryByRole('button', { name: '저장' })
      ).not.toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    test('버튼 클릭 시 onSuccess -> navigate를 호출한다', async () => {
      setup();
      const button = screen.getByRole('button', { name: '저장' });
      const user = userEvent.setup();
      await user.click(button);
      expect(mockMutate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/my-page');
    });

    test('disabled 상태일 때 mutate를 호출하지 않는다', async () => {
      setup({ disabled: true });
      const button = screen.getByRole('button', { name: '저장' });
      expect(button).toBeDisabled();
      const user = userEvent.setup();
      await user.click(button);
      expect(mockMutate).not.toHaveBeenCalled();
    });

    test('mutate 실패(onError) 시 alert을 호출한다', async () => {
      vi.spyOn(window, 'alert').mockImplementation(() => {});
      mockMutate.mockImplementation((_data, opts) => opts.onError?.());
      setup();
      const user = userEvent.setup();
      await user.click(screen.getByRole('button', { name: '저장' }));
      expect(window.alert).toHaveBeenCalledWith(
        '프로필 업데이트에 실패했습니다.'
      );
    });
  });
});
