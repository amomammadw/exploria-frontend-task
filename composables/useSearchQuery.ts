export const useSearchQuery = () => {
  const route = useRoute();

  function setQuery(queryObj: Record<string, string>) {
    return navigateTo({
      query: {
        ...route.query,
        ...queryObj,
      },
    });
  }

  return { setQuery };
};
