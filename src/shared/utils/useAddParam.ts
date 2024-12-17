export const useAddParam = (key: string, value: string) => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(key, value);
  return searchParams.toString();
};
