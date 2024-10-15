import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

//ref가 보였을 때 작성한 데이터 패칭 함수를 useInfiniteScroll 인자로 사용하시면 됩니다.
export const useInfiniteScroll = (
  fetchData: () => Promise<void>,
  hasMore: boolean,
  isLoading: boolean
) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      fetchData();
    }
  }, [inView, isLoading, hasMore, fetchData]);

  return { ref };
};
