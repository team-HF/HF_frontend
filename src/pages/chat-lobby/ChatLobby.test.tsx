/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ChatLobby from './ChatLobby';
import renderWithClient from '../../__test__/renderWithClient';
import * as ReactRouterDom from 'react-router-dom';
import { SocketContext } from '../../app/providers/SocketProvider';
import * as chatApi from '../../features/chat-lobby/api/useGetChatRooms';
import { MatchingStatus } from '../../features/chat-lobby/model/chat-lobby.types';

// 1) react-query useQueryClient 모킹
const mockInvalidate = vi.fn();
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<any>('@tanstack/react-query');
  return {
    ...actual,
    useQueryClient: () => ({ invalidateQueries: mockInvalidate }),
  };
});

// 2) react-router-dom useNavigate 모킹
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof ReactRouterDom>(
    'react-router-dom'
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// 3) API 훅 mock 경로를 실제 경로로
const defaultRooms = [{ roomId: 1 }, { roomId: 2 }];
vi.mock('../../features/chat-lobby/api/useGetChatRooms', () => ({
  useGetChatRooms: () => ({
    data: defaultRooms,
    isLoading: false,
    error: undefined,
  }),
}));

// 4) UI 컴포넌트들 mock 경로도 실제 경로로
vi.mock('../../features/chat-lobby/ui/EmptyChatList', () => ({
  default: () => <div data-testid="empty-chat-list" />,
}));
vi.mock('../../features/chat-lobby/ui/chat-list/ui/ChatList', () => ({
  default: ({ chatListData }: any) => (
    <div data-testid="chat-list">{chatListData.length}</div>
  ),
}));

describe('ChatLobby 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderComponent() {
    return renderWithClient(
      <SocketContext.Provider
        value={{ stompClient: null, isConnected: true, memberId: 1 }}
      >
        <MemoryRouter>
          <ChatLobby />
        </MemoryRouter>
      </SocketContext.Provider>
    );
  }

  test('로딩 중이면 Loader를 보여준다', () => {
    vi.spyOn(chatApi, 'useGetChatRooms').mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    } as any);
    renderComponent();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('에러 시 에러 메시지를 보여준다', () => {
    vi.spyOn(chatApi, 'useGetChatRooms').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: {},
    } as any);
    renderComponent();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('데이터 없으면 안내 메시지를 보여준다', () => {
    vi.spyOn(chatApi, 'useGetChatRooms').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: undefined,
    } as any);
    renderComponent();
    expect(
      screen.getByText('데이터를 불러올 수 없습니다.')
    ).toBeInTheDocument();
  });

  test('빈 리스트면 EmptyChatList를 보여준다', () => {
    vi.spyOn(chatApi, 'useGetChatRooms').mockReturnValue({
      data: [],
      isLoading: false,
      error: undefined,
    } as any);
    renderComponent();
    expect(screen.getByTestId('empty-chat-list')).toBeInTheDocument();
  });

  test('채팅 데이터가 있으면 ChatList를 보여준다', () => {
    renderComponent();
    expect(screen.getByTestId('chat-list')).toHaveTextContent(
      defaultRooms.length.toString()
    );
  });

  test('필터 변경 시 invalidateQueries 호출', () => {
    renderComponent();
    fireEvent.click(screen.getByText('전체'));
    fireEvent.click(screen.getByText('매칭 진행 중'));
    expect(mockInvalidate).toHaveBeenCalledWith({
      queryKey: [
        'chat-lobby-content',
        1,
        MatchingStatus.MATCHING_IN_PROGRESS,
        1,
        10,
      ],
    });
  });
});
