/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, beforeAll, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import ProfileBox from '../ui/ProfileBox';
import renderWithClient from '../../../__test__/renderWithClient';
import {
  FITNESS_LEVEL_MAP,
  COMPANION_STYLE_MAP,
  FITNESS_EAGERNESS_MAP,
  FITNESS_KIND_MAP,
  FITNESS_OBJECTIVE_MAP,
  getCompanionStyleText,
  getFitnessEagernessText,
  getFitnessKindText,
} from '../../../shared/constants/fitness-category';

describe('ProfileBox 컴포넌트', () => {
  // import.meta.env.VITE_BASE_URL 를 테스트용으로 덮어쓰기
  beforeAll(() => {
    import.meta.env.VITE_BASE_URL = 'http://test-base';
  });

  test('myData 없으면 에러 메시지를 보여준다', () => {
    renderWithClient(<ProfileBox />);
    expect(
      screen.getByText('프로필 정보를 불러올 수 없습니다.')
    ).toBeInTheDocument();
  });

  test('myData가 있으면 프로필 정보를 정상 렌더링한다', () => {
    const myData = {
      profileImageUrl: 'http://example.com/avatar.jpg',
      nickname: 'Hyun',
      introduction: '안녕하세요',
      tier: { fitnessLevel: 'BEGINNER', tier: 3 },
      companionStyle: 'GROUP' as keyof typeof COMPANION_STYLE_MAP,
      fitnessEagerness: 'LAZY' as keyof typeof FITNESS_EAGERNESS_MAP,
      fitnessKind: 'LOW_STRESS' as keyof typeof FITNESS_KIND_MAP,
      fitnessObjective: 'BULK_UP' as keyof typeof FITNESS_OBJECTIVE_MAP,
      fitnessLevel: 'BEGINNER' as keyof typeof FITNESS_LEVEL_MAP,
    };

    renderWithClient(<ProfileBox myData={myData} />);

    // 이미지 src
    const img = screen.getByAltText('user profile') as HTMLImageElement;
    expect(img.src).toBe('http://example.com/avatar.jpg');

    // 닉네임
    expect(screen.getByText('Hyun')).toBeInTheDocument();

    // 레벨 표시
    const levelText = `${FITNESS_LEVEL_MAP[myData.fitnessLevel]} LV.${
      myData.tier.tier
    }`;
    expect(screen.getByText(levelText)).toBeInTheDocument();

    // 해시태그
    const tags = [
      getCompanionStyleText(myData.companionStyle),
      getFitnessEagernessText(myData.fitnessEagerness),
      getFitnessKindText(myData.fitnessKind),
      FITNESS_OBJECTIVE_MAP[myData.fitnessObjective],
    ].map((t) => `#${t}`);
    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });

    // 소개글
    expect(screen.getByText('안녕하세요')).toBeInTheDocument();
  });
});
