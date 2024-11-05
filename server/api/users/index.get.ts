import { usersList } from "~/data/records";
import { IUser } from "~/types/user.type";

export default defineCachedEventHandler((event) => {
  const query = getQuery(event);
  let result: IUser[] = [];

  if (query.per_page && query.page) {
    let page = parseInt(query.page.toString());
    let perPage = parseInt(query.per_page.toString());
    let maxNumbers = page * perPage;

    const numberOfPages = getPageChunks(usersList.length, perPage);

    if (page > numberOfPages) page = numberOfPages;

    result = usersList.slice(maxNumbers - perPage, maxNumbers);
  }

  if (query.name === "desc") {
    const sorted = result.sort((a: IUser, b: IUser) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    result = sorted;
  }

  return result;
});
