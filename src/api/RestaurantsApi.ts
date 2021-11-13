import { config } from "../config";
import { FilterInterface } from "../interfaces/requests";

const authorizationHeader: RequestInit = {
  method: "GET",
  credentials: "include",
  headers: {
    Authorization: `Bearer ${config.token}`,
    "Content-Type": "application/json",
  },
};

export const fetchRestaurantsDataAsync = async (filter: FilterInterface) => {
  try {
    const response = await fetch(config.restaurantsUrl, authorizationHeader);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody;
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
