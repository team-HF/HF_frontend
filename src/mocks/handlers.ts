import { http, HttpResponse } from 'msw';
import { MatchingUserCard } from '../entities/my-page/model/matching-user-card.interface';

// 더미 데이터 생성
const dummyUsers: MatchingUserCard[] = Array.from({ length: 50 }, (_, i) => ({
  profileImage: '/svg/default-profile-icon.svg',
  nickname: `유저 ${i + 1}`,
  matchCount: Math.floor(Math.random() * 10) + 1,
  location: `지역 ${i + 1}`,
  hashtags: ['#소규모형', '#귀차니즘형', '#기능성피트니스위주'],
}));

// API 핸들러
export const handlers = [
  http.get('/api/matching-users', () => {
    // 무작위 유저 한 명을 선택
    const randomUser =
      dummyUsers[Math.floor(Math.random() * dummyUsers.length)];

    // 랜덤 유저 한 명 반환
    return HttpResponse.json([randomUser]);
  }),
];
