export const useGetParams = (paramName: string) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const result = params.get(paramName);
  return result;
};
