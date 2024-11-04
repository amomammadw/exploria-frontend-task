import { usersList } from "~/data/records";

export default defineCachedEventHandler((event) => {
  // const query = getQuery(event);

  return usersList;
});
