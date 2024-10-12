export const useGetDate = (value?: Date) => {
  if (value) {
    const date = new Date(value);
    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const result = `${year}.${month}.${day}`;
    return result;
  } else {
    return "알수없음";
  }
};
