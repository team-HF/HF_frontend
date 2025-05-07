/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MatchingList from '../ui/MatchingList';
import renderWithClient from '../../../__test__/renderWithClient';
import { describe, beforeEach, expect, vi, test } from 'vitest';
import * as matchingApi from '../api/useGetMyMatchingList';
import * as routerDom from 'react-router-dom';
import { formatDate } from '../utils/matching-list';

// Virtuoso 모킹: data.map 으로 listitem 렌더링 + endReached 즉시 호출
vi.mock('react-virtuoso', () => ({
  Virtuoso: ({ data, itemContent, endReached }: any) => {
    // 스크롤 끝 도달 콜백을 즉시 실행
    endReached?.();
    return (
      <>
        {data.map((item: any, idx: number) => (
          <React.Fragment key={idx}>{itemContent(idx, item)}</React.Fragment>
        ))}
      </>
    );
  },
}));

// 내 정보 훅 모킹
vi.mock('../../../shared/api/useGetMyData', () => ({
  useGetMyData: vi.fn(() => ({
    data: { memberId: 1 },
    isLoading: false,
    isError: false,
  })),
}));

// 매칭 리스트 API 모킹 (기본)
const mockFetchNextPage = vi.fn();
vi.mock('../api/useGetMyMatchingList', () => ({
  useGetMyMatchingList: vi.fn(() => ({
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
  })),
}));

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

  test('빈 리스트면 EmptyMatchingList를 렌더링한다', () => {
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
    // data-testid 대신 화면 텍스트로 검증
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
    const expected = formatDate('2025-05-01T12:00:00Z');
    expect(items).toHaveLength(1);

    expect(screen.getByText('철수')).toBeInTheDocument();
    expect(screen.getByText('3회 매칭됨')).toBeInTheDocument();
    expect(screen.getByText('강남')).toBeInTheDocument();
    expect(screen.getByText(`매칭 날짜 : ${expected}`)).toBeInTheDocument();

    expect(screen.getByTestId('review-button')).toBeInTheDocument();
    expect(screen.getByTestId('chat-button')).toBeInTheDocument();
  });

  test('스크롤 끝 도달 시 fetchNextPage가 호출된다', () => {
    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );
    // Virtuoso mock 에서 mount 시 endReached() 를 즉시 호출하기 때문에
    // 여기에선 fetchNextPage 가 이미 호출된 상태여야 함
    expect(mockFetchNextPage).toHaveBeenCalled();
  });

  test('필터 드롭다운 열고 옵션 클릭 시 setSearchParams 호출', () => {
    const mockSetSP = vi.fn();
    vi.spyOn(routerDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams([['tab', 'matching']]),
      mockSetSP,
    ]);

    renderWithClient(
      <MemoryRouter>
        <MatchingList />
      </MemoryRouter>
    );

    // 드롭다운 열기 → 필터 선택
    fireEvent.click(screen.getByText('전체'));
    fireEvent.click(screen.getByText('매칭 진행 중'));

    expect(mockSetSP).toHaveBeenCalledWith({
      tab: 'matching',
      filter: 'in-progress',
    });
  });
});
