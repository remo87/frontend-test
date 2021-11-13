import { ICategory } from "../interfaces/restaurants";
import { categories } from "./filterData";

export const getRestaurantCategories = () => {
  const filteredCategories = categories.filter((category: ICategory) =>
    category.parent_aliases.includes("restaurants")
  );
  return filteredCategories;
};
