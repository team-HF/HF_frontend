export const useChangeDateForm = (
  startDate: string,
  // endDate: string | null
) => {
  const changeForm = (date: string) => {
    const [year, month] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1);
    const formattedDate = dateObj.toLocaleString("ko-KR", {
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };
  // if (endDate) {
  //   const result = `${changeForm(startDate)} - ${changeForm(endDate)}`;
  //   return result;
  // } else {
    const result = `${changeForm(startDate)} - 현재`;
    return result;
  // }
};
