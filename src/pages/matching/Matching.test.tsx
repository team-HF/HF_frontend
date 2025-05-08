/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  describe,
  expect,
  vi,
  beforeEach,
  type MockedFunction,
  test,
} from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import { SocketContext } from '../../app/providers/SocketProvider';
import Matching from './Matching';
import renderWithClient from '../../__test__/renderWithClient';
import userEvent from '@testing-library/user-event';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof ReactRouterDom>(
    'react-router-dom'
  );
  return {
    ...actual,
    useLocation: vi.fn(),
    useNavigate: vi.fn(),
    useParams: vi.fn(),
  };
});

describe('Matching 페이지', () => {
  const useLocation = ReactRouterDom.useLocation as unknown as MockedFunction<
    typeof ReactRouterDom.useLocation
  >;
  const useNavigate = ReactRouterDom.useNavigate as unknown as MockedFunction<
    typeof ReactRouterDom.useNavigate
  >;
  const useParams = ReactRouterDom.useParams as unknown as MockedFunction<
    typeof ReactRouterDom.useParams
  >;

  vi.mock('../../entities/matching/ui/PartnerInfo', () => ({
    default: () => <div data-testid="partner-info" />,
  }));

  vi.mock('../../features/matching/ui/ScheduleForm', () => {
    return {
      default: ({
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedLocation,
        setSelectedLocation,
      }: any) => (
        <div>
          <input
            aria-label="날짜"
            value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ''}
            onChange={(e) => {
              setSelectedDate(new Date(e.target.value));
            }}
          />
          <input
            aria-label="시간"
            value={
              selectedTime
                ? `${selectedTime.period}:${selectedTime.hour}:${selectedTime.minute}`
                : ''
            }
            onChange={(e) => {
              const [period, hour, minute] = e.target.value.split(':');
              setSelectedTime({
                period,
                hour: Number(hour),
                minute: Number(minute),
              });
            }}
          />
          <input
            aria-label="장소"
            value={selectedLocation || ''}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
          />
        </div>
      ),
    };
  });
  let mockNavigate: ReturnType<typeof vi.fn>;
  const fakeStompClient = { publish: vi.fn() };

  beforeEach(() => {
    vi.clearAllMocks();

    useLocation.mockReturnValue({ state: 42 } as any);
    useParams.mockReturnValue({ id: '99' } as any);
    mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);
  });

  function renderWithSocket() {
    return renderWithClient(
      <SocketContext.Provider
        value={{
          stompClient: fakeStompClient as any,
          isConnected: true,
          memberId: 7,
        }}
      >
        <ReactRouterDom.MemoryRouter>
          <Matching />
        </ReactRouterDom.MemoryRouter>
      </SocketContext.Provider>
    );
  }

  test('입력값 없이 제출하면 날짜 경고창이 뜬다', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    renderWithSocket();
    await userEvent.click(screen.getByRole('button', { name: '요청' }));

    expect(alertSpy).toHaveBeenCalledWith('날짜를 선택해주세요.');
  });

  test('모든 값 입력 후 클릭하면 stompClient.publish & navigate가 호출된다', async () => {
    renderWithSocket();

    fireEvent.change(screen.getByLabelText('날짜'), {
      target: { value: '2025-05-01' },
    });
    fireEvent.change(screen.getByLabelText('시간'), {
      target: { value: 'PM:2:30' },
    });
    fireEvent.change(screen.getByLabelText('장소'), {
      target: { value: '강남역' },
    });

    await userEvent.click(screen.getByRole('button', { name: '요청' }));

    expect(fakeStompClient.publish).toHaveBeenCalledWith(
      expect.objectContaining({
        destination: '/hf/app/chat/messages/99',
        body: expect.stringContaining(`"matchingTargetId":42`),
      })
    );
    expect(mockNavigate).toHaveBeenCalledWith('/chat/99');
  });
});
