import { describe, expect, test, vi } from 'vitest';
import { createTestQueryClient } from '../../../__test__/createTestQueryClient';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import DuplicateNicknameButton from '../ui/DuplicateNicknameButton';
import userEvent from '@testing-library/user-event';

const defaultProps = {
  nickname: '테스트',
  onSuccess: vi.fn(),
  disabled: false,
};

const mockUseGetMyData = vi.fn();
const mockRefetch = vi.fn();

vi.mock('../api/useGetDuplicateNickName', () => ({
  useGetDuplicateNickname: () => ({
    refetch: mockRefetch,
  }),
}));

vi.mock('../../../shared/api/useGetMyData', () => ({
  useGetMyData: () => mockUseGetMyData(),
}));

const setup = (overrides = {}) => {
  const queryClient = createTestQueryClient();
  const props = { ...defaultProps, ...overrides };
  render(
    <QueryClientProvider client={queryClient}>
      <DuplicateNicknameButton {...props} />
    </QueryClientProvider>
  );
};

describe('DuplicateNicknameButton', () => {
  mockUseGetMyData.mockReset();
  mockRefetch.mockReset();
  mockRefetch.mockReset();
  mockUseGetMyData.mockReturnValue({
    data: { memberId: 1 },
  });
  mockRefetch.mockImplementation((_data, options) => {
    options?.onSuccess?.({});
  });

  test('disabled면 api를 호출하지 않는다', async () => {
    setup({ disabled: true });
    const button = screen.getByText('중복검사');
    const user = userEvent.setup();
    await user.click(button);
    expect(mockRefetch).not.toBeCalled();
  });
  test('클릭 한번에 refetch는 한번만 호출만 호출 돼야 한다.', async () => {
    setup();
    mockRefetch.mockResolvedValue({ data: { content: false } });
    const button = screen.getByText('중복검사');
    const user = userEvent.setup();
    await user.click(button);
    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });
  test('사용 가능한 닉네임일 때 alert("사용 가능한 닉네임입니다.")가 호출된다', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    mockRefetch.mockResolvedValue({ data: { content: false } });
    setup();
    const button = screen.getByText('중복검사');
    const user = userEvent.setup();
    await user.click(button);
    expect(window.alert).toHaveBeenCalledWith('사용 가능한 닉네임입니다.');
  });
  test('이미 사용한 닉네임일 때 alert("이미 사용중인 닉네임입니다.")가 호출된다', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    mockRefetch.mockResolvedValue({ data: { content: true } });
    setup();
    const button = screen.getByText('중복검사');
    const user = userEvent.setup();
    await user.click(button);
    expect(window.alert).toHaveBeenCalledWith('이미 사용중인 닉네임입니다.');
  });
});
