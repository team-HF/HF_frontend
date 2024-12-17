export const useGetDate = (value: string) => {
  const currentDate = new Date();
  const postedDate = new Date(value);
  const diffMs = currentDate.getTime() - postedDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths >= 1) {
    const year = String(postedDate.getFullYear()).slice(-2);
    const month = String(postedDate.getMonth() + 1).padStart(2, "0");
    const day = String(postedDate.getDate()).padStart(2, "0");
    const result = `${year}년 ${month}월 ${day}일`;
    return result;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks}주 전`;
  } else if (diffDays >= 1) {
    return `${diffDays}일 전`;
  } else if (diffHours >= 1) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes >= 1) {
    return `${diffMinutes}분 전`;
  } else {
    return `방금 전`;
  }
};
