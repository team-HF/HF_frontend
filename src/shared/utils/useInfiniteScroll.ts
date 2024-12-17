import { useEffect, useRef } from 'react';
import { VirtuosoHandle } from 'react-virtuoso';

// 사용하는 컴포넌트에서 useInfiniteScroll 함수의 인자로 데이터 패칭 함수를 넣어서 사용하면 됩니다.
export const useInfiniteScroll = (
  fetchData: () => Promise<void>,
  hasMore: boolean,
  isLoading: boolean
) => {
  const virtuosoRef = useRef<VirtuosoHandle | null>(null);

  useEffect(() => {
    if (!isLoading && hasMore) {
      fetchData();
    }
  }, [isLoading, hasMore, fetchData]);

  return { virtuosoRef };
};
