import { http, HttpResponse } from 'msw';
import { MatchingUserCard } from '../entities/my-page/model/matching-user-card.interface';

// 더미 데이터 생성
const dummyUsers: MatchingUserCard[] = Array.from({ length: 30 }, (_, i) => ({
  profileImage: '/svg/default-profile-icon.svg',
  nickname: `유저 ${i + 1}`,
  matchCount: Math.floor(Math.random() * 10) + 1,
  location: `지역 ${i + 1}`,
  hashtags: [
    '#소규모형',
    '#귀차니즘형',
    '#기능성피트니스위주',
    '#헬스헬스무조건벌크업',
  ],
}));

const shuffleArray = (array: MatchingUserCard[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// API 핸들러
export const handlers = [
  http.get('/api/matching-users', ({ request }) => {
    const url = new URL(request.url);

    const pageParam = url.searchParams.get('page');
    const limitParam = url.searchParams.get('limit');
    const page = parseInt(pageParam || '1', 10);
    const limit = parseInt(limitParam || '1', 10);

    const start = (page - 1) * limit;
    const end = start + limit;

    const totalPages = Math.ceil(dummyUsers.length / limit);

    const paginatedUsers = shuffleArray(dummyUsers).slice(start, end);
    const responseData = {
      data: paginatedUsers,
      page,
      limit,
      totalPages,
      totalUsers: dummyUsers.length,
    };

    if (page > totalPages) {
      return HttpResponse.json({
        message: '페이지 수를 초과했습니다.',
      });
    }
    return HttpResponse.json(responseData);
  }),
];
