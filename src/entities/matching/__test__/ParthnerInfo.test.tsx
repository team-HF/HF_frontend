/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, beforeEach, test, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import PartnerInfo from '../ui/PartnerInfo';
import renderWithClient from '../../../__test__/renderWithClient';
import * as matchingApi from '../../../features/matching/api/useGetMatchingUserInfo';
import * as tokenApi from '../../../shared/api/getSgisApiAccessToken';
import * as locApi from '../../../shared/api/getSgisLocation';
vi.mock('../../../shared/ui/level-label/LevelLabel', () => ({
  default: ({ matchingUserTier }: any) => (
    <div data-testid="level-label">
      Tier: {matchingUserTier.tier}, Level: {matchingUserTier.fitnessLevel}
    </div>
  ),
}));

describe('PartnerInfo 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('로딩 중이면 Loader를 보여준다', () => {
    vi.spyOn(matchingApi, 'useGetMatchingUserInfo').mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    } as any);

    renderWithClient(<PartnerInfo matchingUserId={123} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('에러 시 에러 메시지를 보여준다', () => {
    vi.spyOn(matchingApi, 'useGetMatchingUserInfo').mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error('fail'),
    } as any);

    renderWithClient(<PartnerInfo matchingUserId={123} />);
    expect(screen.getByText('error.')).toBeInTheDocument();
  });

  test('정상 데이터 로딩 후 닉네임·레벨·위치가 표시된다', async () => {
    const fakeUser = {
      profileImageUrl: 'https://img',
      nickname: '철수',
      tier: { fitnessLevel: 'BEGINNER', tier: 3 },
      cd1: '11',
      cd2: '22',
      cd3: '33',
    };
    vi.spyOn(matchingApi, 'useGetMatchingUserInfo').mockReturnValue({
      data: fakeUser,
      isLoading: false,
      error: null,
    } as any);

    vi.spyOn(tokenApi, 'getSgisApiAccessToken').mockResolvedValue(undefined);
    vi.spyOn(locApi, 'getSgisLocation').mockResolvedValue({
      full_addr: '서울특별시 강남구',
    } as any);

    renderWithClient(<PartnerInfo matchingUserId={123} />);

    await waitFor(() => {
      expect(screen.getByText('철수')).toBeInTheDocument();
      // LevelLabel mock 컴포넌트
      expect(screen.getByTestId('level-label')).toHaveTextContent(
        'Tier: 3, Level: BEGINNER'
      );
      // 위치 아이콘
      expect(screen.getByAltText('location-icon')).toBeInTheDocument();
      // 주소 텍스트
      expect(screen.getByText('서울특별시 강남구')).toBeInTheDocument();
    });
  });
});
