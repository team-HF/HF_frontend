/* eslint-disable @typescript-eslint/no-explicit-any */
import { screen, fireEvent } from '@testing-library/react';
import MyPage from './MyPage';
import renderWithClient from '../../__test__/renderWithClient';
import { describe, beforeEach, expect, vi, test } from 'vitest';
import * as MyDataHook from '../../shared/api/useGetMyData';
import * as Router from 'react-router-dom';

vi.mock('../../shared/ui/new-header/NewHeader', () => ({
  default: () => <div data-testid="new-header" />,
}));
vi.mock('../../shared/ui/page-form/PageForm', () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));
vi.mock('../../features/my-page/ui/ProfileBox', () => ({
  default: () => <div data-testid="profile-box" />,
}));
vi.mock('../../features/my-page/ui/LevelProgressBar', () => ({
  default: () => <div data-testid="level-progress" />,
}));
vi.mock('../../shared/ui/large-button/LargeButton', () => ({
  default: ({ text, onClick }: any) => (
    <button onClick={onClick}>{text}</button>
  ),
}));
vi.mock('../../entities/my-page/ui/Tab', () => ({
  default: ({ currentTab, setTab }: any) => (
    <div role="tablist">
      {['내 운동 매칭 List', '즐겨찾기', '선물함'].map((name) => (
        <button
          key={name}
          role="tab"
          aria-selected={currentTab === name}
          onClick={() => setTab(name)}
        >
          {name}
        </button>
      ))}
    </div>
  ),
}));
vi.mock('../../features/my-page/ui/MatchingList', () => ({
  default: () => <div data-testid="matching-list" />,
}));
vi.mock('../../features/my-page/ui/SaveList', () => ({
  default: () => <div data-testid="save-list" />,
}));
vi.mock('../../features/my-page/ui/CouponList', () => ({
  default: () => <div data-testid="coupon-list" />,
}));

const mockNavigate = vi.fn();
const mockSetSearchParams = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof Router>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
  };
});

describe('MyPage 컴포넌트', () => {
  const defaultData = {
    memberId: 1,
    loginId: 'hyun',
    role: 'USER',
    name: 'Hyun',
    email: 'hyun@example.com',
    birthDate: '1990-01-01',
    cd1: 'A',
    cd2: 'B',
    cd3: 'C',
    companionStyle: 'SMALL' as const,
    creationTime: '2025-05-07T00:00:00Z',
    fitnessEagerness: 'EAGER' as const,
    fitnessKind: 'FUNCTIONAL' as const,
    fitnessLevel: 'BEGINNER' as const,
    fitnessObjective: 'RUNNING' as const,
    gender: 'MALE' as const,
    introduction: 'Hello',
    matchedCount: 0,
    nickname: 'Nick',
    profileImageUrl: null,
    tier: { fitnessLevel: 'BEGINNER', tier: 1 },
  };

  beforeEach(() => {
    vi.restoreAllMocks();
    mockNavigate.mockClear();
    mockSetSearchParams.mockClear();
  });

  test('로딩 중이면 Loader를 보여준다', () => {
    vi.spyOn(MyDataHook, 'useGetMyData').mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    renderWithClient(<MyPage />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('에러 상태이면 에러 메시지를 보여준다', () => {
    vi.spyOn(MyDataHook, 'useGetMyData').mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    renderWithClient(<MyPage />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('정상 데이터 로딩 후 기본 탭(Matching) 렌더링', () => {
    vi.spyOn(MyDataHook, 'useGetMyData').mockReturnValue({
      data: defaultData,
      isLoading: false,
      isError: false,
    } as any);

    renderWithClient(<MyPage />);
    expect(screen.getByTestId('profile-box')).toBeInTheDocument();
    const matchingTab = screen.getByRole('tab', { name: '내 운동 매칭 List' });
    expect(matchingTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('matching-list')).toBeInTheDocument();
  });

  test('탭 전환 시 URL 쿼리 변경 콜백이 호출된다', () => {
    vi.spyOn(MyDataHook, 'useGetMyData').mockReturnValue({
      data: defaultData,
      isLoading: false,
      isError: false,
    } as any);

    renderWithClient(<MyPage />);
    fireEvent.click(screen.getByRole('tab', { name: '즐겨찾기' }));
    expect(mockSetSearchParams).toHaveBeenCalledWith({ tab: 'bookmark' });

    fireEvent.click(screen.getByRole('tab', { name: '선물함' }));
    expect(mockSetSearchParams).toHaveBeenCalledWith({ tab: 'gift' });
  });

  test('북마크/선물함 탭에 맞는 리스트가 렌더링된다', () => {
    vi.spyOn(MyDataHook, 'useGetMyData').mockReturnValue({
      data: defaultData,
      isLoading: false,
      isError: false,
    } as any);

    renderWithClient(<MyPage />);
    fireEvent.click(screen.getByRole('tab', { name: '즐겨찾기' }));
    expect(screen.getByTestId('save-list')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: '선물함' }));
    expect(screen.getByTestId('coupon-list')).toBeInTheDocument();
  });
});
