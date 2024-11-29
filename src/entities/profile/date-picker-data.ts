const currentYear = new Date().getFullYear();
export const yearData = Array.from({ length: 100 }, (_, index) => ({
  id: currentYear - index,
  value: `${currentYear - index}`,
}));

export const monthData = [
  { id: 1, value: "01" },
  { id: 2, value: "02" },
  { id: 3, value: "03" },
  { id: 4, value: "04" },
  { id: 5, value: "05" },
  { id: 6, value: "06" },
  { id: 7, value: "07" },
  { id: 8, value: "08" },
  { id: 9, value: "09" },
  { id: 10, value: "10" },
  { id: 11, value: "11" },
  { id: 12, value: "12" },
];

export const dayData = Array.from({ length: 31 }, (_, index) => ({
  id: index + 1,
  value: index + 1 < 10 ? `0${index + 1}` : `${index + 1}`,
}));
