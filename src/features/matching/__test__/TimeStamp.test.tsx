/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react';
import TimeStamp from '../ui/TimeStamp';
import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('TimeStamp 컴포넌트', () => {
  const mockSetSelectedTime = vi.fn();

  vi.mock('../../../shared/ui/time-picker/EmblaCarousel', () => ({
    default: ({ children }: any) => <>{children}</>,
  }));
  vi.mock('../../../shared/ui/time-picker/embla-wrapper', () => ({
    EmblaLocalWrapper: ({ children }: any) => <>{children}</>,
  }));

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('초기에는 아무 값도 표시되지 않는다', () => {
    render(
      <TimeStamp selectedTime={null} setSelectedTime={mockSetSelectedTime} />
    );
    expect(screen.getByLabelText('시간')).toHaveValue('');
  });

  test('아이콘을 클릭하면 피커가 열리고, ConfirmButton 클릭 시 닫힌다', () => {
    render(
      <TimeStamp selectedTime={null} setSelectedTime={mockSetSelectedTime} />
    );

    // 처음에는 피커(Overlay, ConfirmButton) x
    expect(screen.queryByText('확인')).not.toBeInTheDocument();

    // 화살표 아이콘 클릭 → overlay + carousel 나타남
    fireEvent.click(screen.getByAltText('arrow'));
    expect(screen.getByText('확인')).toBeInTheDocument();
    // ConfirmButton 클릭하면 overlay 사라져야 함
    fireEvent.click(screen.getByText('확인'));
    expect(screen.queryByText('확인')).not.toBeInTheDocument();
  });

  test('selectedTime이 주어지면 input에 포맷된 문자열이 표시된다', () => {
    const time = { period: '오전', hour: 9, minute: 5 };
    render(
      <TimeStamp selectedTime={time} setSelectedTime={mockSetSelectedTime} />
    );
    expect(screen.getByLabelText('시간')).toHaveValue('오전 9시 5분');
  });
});
