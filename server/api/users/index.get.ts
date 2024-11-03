import users from "./records.json";

export default defineCachedEventHandler((event) => {
  const query = getQuery(event);

  return { users };
});
