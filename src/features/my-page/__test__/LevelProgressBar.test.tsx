import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import LevelProgressBar from '../ui/LevelProgressBar';
import renderWithClient from '../../../__test__/renderWithClient';

describe('LevelProgressBar 컴포넌트', () => {
  test('myData가 없으면 에러 메시지를 보여준다', () => {
    renderWithClient(<LevelProgressBar />);
    expect(
      screen.getByText('레벨 정보를 불러올 수 없습니다.')
    ).toBeInTheDocument();
  });

  test('tier 정보가 있으면 5단계 프로그레스 바와 남은 매칭 횟수 메시지를 보여준다', () => {
    // tier.tier === 3 이면, 5 - 3 = 2 회 남았습니다!
    renderWithClient(
      <LevelProgressBar
        myData={{ tier: { fitnessLevel: 'BEGINNER', tier: 3 } }}
      />
    );

    // 메시지 확인
    const msg = screen.getByText('다음 레벨까지 2회의 매칭이 남았습니다!');
    expect(msg).toBeInTheDocument();

    // 프로그레스 바 (LevelWrapper) 안의 Level 요소 5개 확인
    const container = msg.parentElement!;
    const levelWrapper = container.querySelector('div');
    expect(levelWrapper).toBeTruthy();
    expect(levelWrapper!.childElementCount).toBe(5);
  });
});
