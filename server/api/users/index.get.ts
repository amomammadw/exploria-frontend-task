import { usersList } from "~/data/records";

export default defineCachedEventHandler((event) => {
  const query = getQuery(event);
  if (query.per_page) {
    return usersList.slice(0, parseInt(query.per_page as string));
  }

  return usersList;
});
