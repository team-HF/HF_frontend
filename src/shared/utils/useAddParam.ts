export const useAddParam = <T>(key: string, value: T) => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(key, value as string);
  return searchParams.toString();
};
