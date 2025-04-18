export const formatDate = (isoDateString: string): string => {
  const dateObj = new Date(isoDateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export const getFilterNameFromParam = (param: string): string => {
  switch (param) {
    case 'all':
      return '전체';
    case 'in-progress':
      return '매칭 진행 중';
    case 'finished':
      return '매칭 종료';
    case 'halted':
      return '매칭 중단';
    default:
      return '전체';
  }
};

export const getFilterParamFromName = (name: string): string => {
  switch (name) {
    case '전체':
      return 'all';
    case '매칭 진행 중':
      return 'in-progress';
    case '매칭 종료':
      return 'finished';
    case '매칭 중단':
      return 'halted';
    default:
      return 'all';
  }
};
