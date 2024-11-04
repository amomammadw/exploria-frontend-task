import { usersList } from "~/data/records";

export default defineCachedEventHandler((event) => {
  const query = getQuery(event);

  if (query.per_page && query.page) {
    let page = parseInt(query.page.toString());
    let perPage = parseInt(query.per_page.toString());
    let maxNumbers = page * perPage;

    const numberOfPages = getPageChunks(usersList.length, perPage);

    if (page > numberOfPages) page = numberOfPages;

    return usersList.slice(maxNumbers - perPage, maxNumbers);
  }

  return usersList;
});
