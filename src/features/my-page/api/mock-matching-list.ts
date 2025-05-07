import type { MatchingResponse } from '../../../shared/schema/matching-response';

const statuses = ['FINISHED', 'ACCEPTED', 'REJECTED'] as const;
const places = ['헬스장', '공원', '스포츠센터'] as const;
const districts = ['강남구', '송파구', '마포구'] as const;
const neighborhoods = ['삼성동', '잠실동', '홍대동'] as const;

export function generateMockData(
  pageParam = 0,
  pageSize = 2
): MatchingResponse {
  const totalItems = 6;
  const startIndex = pageParam * pageSize;
  const items: MatchingResponse['content']['content'] = Array.from(
    { length: pageSize },
    (_, i) => {
      const index = startIndex + i;
      const status = statuses[index % statuses.length];
      return {
        matchingId: index + 1,
        meetingPlace: `${places[index % places.length]} ${index + 1}호점`,
        meetingPlaceAddress: `서울시 ${districts[index % districts.length]} ${
          neighborhoods[index % neighborhoods.length]
        } ${index + 1}`,
        matchingStatus: status,
        meetingTime: `2025-05-0${(index % 9) + 1}T10:00:00Z`,
        finishTime:
          status === 'FINISHED'
            ? `2025-05-1${(index % 9) + 1}T12:00:00Z`
            : null,
        opponentInfo: {
          memberId: 100 + index,
          nickname: `운동친구${index + 1}`,
          profileImageUrl: null,
          fitnessLevel: 'BEGINNER',
          companionStyle: 'SMALL',
          fitnessEagerness: 'EAGER',
          fitnessObjective: 'RUNNING',
          fitnessKind: 'FUNCTIONAL',
          cd1: `cd1_${index + 1}`,
          cd2: `cd2_${index + 1}`,
          cd3: `cd3_${index + 1}`,
          matchedCount: (index + 1) * 2,
        },
      };
    }
  );

  const response: MatchingResponse = {
    statusCode: 200,
    statusCodeSeries: 2,
    message: null,
    content: {
      page: pageParam,
      pageSize,
      totalElementCount: totalItems,
      totalPageCount: Math.ceil(totalItems / pageSize),
      content: items,
    },
  };

  return response;
}

export function generateMockPages(
  pageCount = 2,
  pageSize = 2
): { pages: MatchingResponse[] } {
  return {
    pages: Array.from({ length: pageCount }, (_, i) =>
      generateMockData(i, pageSize)
    ),
  };
}
