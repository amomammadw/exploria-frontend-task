import { IUser } from "~/types/user.type";

export function searchItem(searchString: string, array: IUser[]): IUser[] {
  const lowerSearchString = searchString.toLowerCase().trim();
  return array.filter((item) => {
    return Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(lowerSearchString)
    );
  });
}
