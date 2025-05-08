/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { describe, beforeEach, test, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MatchingList from '../ui/MatchingList';
import renderWithClient from '../../../__test__/renderWithClient';
import * as matchingApi from '../api/useGetMyMatchingList';
import * as routerDom from 'react-router-dom';
import { getFilterParamFromName } from '../utils/matching-list';

vi.mock('react-virtuoso', () => ({
  Virtuoso: ({ data, itemContent }: any) => (
    <>
      {data.map((item: any, idx: number) => (
        <React.Fragment key={idx}>{itemContent(idx, item)}</React.Fragment>
      ))}
    </>
  ),
}));

vi.mock('../../../shared/api/useGetMyData', () => ({
  useGetMyData: () => ({
    data: { memberId: 1 },
    isLoading: false,
    isError: false,
  }),
}));

const mockFetchNextPage = vi.fn();
vi.mock('../api/useGetMyMatchingList', () => ({
  useGetMyMatchingList: () => ({
    data: {
      pages: [
        {
          content: {
            content: [
              {
                matchingId: 10,
                opponentInfo: {
                  profileImageUrl: null,
                  nickname: '철수',
                  matchedCount: 3,
                  companionStyle: 'GROUP',
                  fitnessEagerness: 'LAZY',
                  fitnessKind: 'HIGH_STRESS',
                  fitnessObjective: 'BULK_UP',
                },
                meetingPlace: '강남',
                meetingTime: '2025-05-01T12:00:00Z',
                matchingStatus: 'FINISHED',
              },
            ],
          },
        },
      ],
    },
    isLoading: false,
    isError: false,
    hasNextPage: true,
    isFetchingNextPage: false,
    fetchNextPage: mockFetchNextPage,
  }),
}));

const invalidateSpy = vi.fn();
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<typeof import('@tanstack/react-query')>(
    '@tanstack/react-query'
  );
  return {
    ...actual,
    useQueryClient: () => ({ invalidateQueries: invalidateSpy }),
  };
});

describe('MatchingList 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('로딩 중이면 Loader를 보여준다', () => {
    vi.spyOn(matchingApi, 'useGetMyMatchingList').mockReturnValue({
      isLoading: true,
    } as any);

    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('에러 시 에러 메시지를 보여준다', () => {
    vi.spyOn(matchingApi, 'useGetMyMatchingList').mockReturnValue({
      isLoading: false,
      isError: true,
    } as any);

    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('빈 리스트면 EmptyMatchingList를 보여준다', () => {
    vi.spyOn(matchingApi, 'useGetMyMatchingList').mockReturnValue({
      data: { pages: [] },
      isLoading: false,
      isError: false,
    } as any);

    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );
    expect(screen.getByText('매칭 리스트가 비어있습니다.')).toBeInTheDocument();
    expect(
      screen.getByText('새로운 운동 친구를 만나보세요')
    ).toBeInTheDocument();
  });

  test('리스트 아이템이 정상적으로 렌더링된다', () => {
    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBeGreaterThan(0);

    expect(screen.getByText('철수')).toBeInTheDocument();
    expect(screen.getByText('3회 매칭됨')).toBeInTheDocument();
    expect(screen.getByText('강남')).toBeInTheDocument();
    expect(screen.getByText(/2025년\s*5월\s*1일/)).toBeInTheDocument();

    expect(screen.getByTestId('review-button')).toBeInTheDocument();
    expect(screen.getByTestId('chat-button')).toBeInTheDocument();
  });

  test('필터 드롭다운 열고 옵션 클릭 시 setSearchParams & invalidateQueries 호출', () => {
    const mockSetSP = vi.fn();
    vi.spyOn(routerDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams([['tab', 'matching']]),
      mockSetSP,
    ] as any);

    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('전체'));
    fireEvent.click(screen.getByText('매칭 진행 중'));

    expect(mockSetSP).toHaveBeenCalledWith({
      tab: 'matching',
      filter: getFilterParamFromName('매칭 진행 중'),
    });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['myMatchingList', 1, '매칭 진행 중'],
    });
  });
});
