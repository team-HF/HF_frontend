/* eslint-disable @typescript-eslint/no-explicit-any */
import { screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import * as chatApi from '../../features/chat/api/useGetChatMessage';
import * as userApi from '../../features/matching/api/useGetMatchingUserInfo';
import { SocketContext } from '../../app/providers/SocketProvider';
import { Chat } from './Chat';
import renderWithClient from '../../__test__/renderWithClient';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

vi.mock('react-virtuoso', () => ({
  Virtuoso: ({ data = [], itemContent }: any) => {
    // data가 undefined인 경우를 대비하여 기본값 빈 배열 설정
    const safeData = data || [];

    try {
      return (
        <>
          {safeData.flatMap((page: any, pageIndex: number) => {
            // 페이지가 배열인지 확인 후 순회
            if (Array.isArray(page)) {
              return page.map((msg: any, msgIndex: number) => (
                <div
                  key={`${pageIndex}-${msgIndex}`}
                  data-testid={`message-${msgIndex}`}
                >
                  {msg && typeof itemContent === 'function'
                    ? itemContent(msgIndex, msg)
                    : null}
                </div>
              ));
            }
            return [];
          })}
        </>
      );
    } catch (e) {
      // 오류가 발생한 경우 대체 UI 반환
      console.error('Virtuoso mock error:', e);
      return <div data-testid="virtuoso-error">Rendering error</div>;
    }
  },
}));

describe('Chat 컴포넌트', () => {
  const mockFetch = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderChat({
    pages,
    isLoading = false,
    error = undefined,
    matchingUserInfo = {
      nickname: '상대',
      tier: { fitnessLevel: 'A', tier: 1 },
    },
    matchingInfoLoading = false,
    matchingInfoError = undefined,
  }: any) {
    vi.spyOn(chatApi, 'useGetChatMessages').mockReturnValue({
      data: pages ? { pages } : undefined,
      isLoading,
      error,
      fetchNextPage: mockFetch,
      hasNextPage: false,
      isFetchingNextPage: false,
    } as any);
    vi.spyOn(userApi, 'useGetMatchingUserInfo').mockReturnValue({
      data: matchingUserInfo,
      isLoading: matchingInfoLoading,
      error: matchingInfoError,
    } as any);

    const fakeClient = {
      publish: vi.fn(),
      subscribe: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    };
    renderWithClient(
      <SocketContext.Provider
        value={{
          stompClient: fakeClient as any,
          isConnected: true,
          memberId: 1,
        }}
      >
        <MemoryRouter initialEntries={['/chat/1']}>
          <Routes>
            <Route path="/chat/:chatRoomId" element={<Chat />} />
          </Routes>
        </MemoryRouter>
      </SocketContext.Provider>
    );
    return fakeClient;
  }

  test('로딩 중이면 Loader를 보여준다', () => {
    renderChat({ pages: [], isLoading: true });
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('에러 시 에러 메시지를 보여준다', () => {
    renderChat({ pages: [], isLoading: false, error: {} });
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('메시지 없으면 경고 메시지', () => {
    renderChat({ pages: [] });
    expect(screen.getByText(/대화는 HF 채팅방에서/)).toBeInTheDocument();
  });

  test('텍스트 전송 시 publish 호출', () => {
    const client = renderChat({
      pages: [
        [
          {
            chatMessageId: 1,
            senderId: 2,
            creationTime: '2025-01-01T00:00:00Z',
            content: { text: 'hello' },
            chatMessageType: 'TEXT',
          },
        ],
      ],
    });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test msg' } });
    fireEvent.keyDown(input, {
      key: 'Enter',
      nativeEvent: { isComposing: false },
    });
    expect(client.publish).toHaveBeenCalled();
    expect(input).toHaveValue('');
  });
});
