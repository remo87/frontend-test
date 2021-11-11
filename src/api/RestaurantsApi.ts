import { config } from "../config";
import { Filter } from "../interfaces/requests";

export const fetchRestaurantsDataAsync = async (filter: Filter) => {
  try {
    const response = await fetch(config.restaurantsUrl);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody.results;
  } catch (error) {
    throw new Error("");
  }
};

export const fetchRestaurantDetailAsync = async (id: string) => {
  try {
    const response = await fetch(`${config.restaurantDetailUrl}${id}`);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody.results;
  } catch (error) {
    throw new Error("");
  }
};
