export function getPageChunks(allPages: number, perPage: number) {
  return Math.ceil(allPages / perPage);
}
