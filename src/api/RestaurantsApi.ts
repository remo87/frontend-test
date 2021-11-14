import { config } from "../config";
import { IFilter } from "../interfaces/requests";

const authorizationHeader: RequestInit = {
  method: "GET",
  credentials: "include",
  headers: {
    Authorization: `Bearer ${config.token}`,
    "Content-Type": "application/json",
  },
};

const getUrl = (uri: string, filter: IFilter): string => {
  let search = new URLSearchParams();
  Object.entries(filter).forEach(([key, value]) => {
    if (value) search.append(key, value);
  });
  return `${uri}?${search.toString()}`;
};

export const fetchRestaurantsDataAsync = async (filter: IFilter) => {
  try {
    const url = getUrl(config.restaurantsUrl, filter);
    const response = await fetch(url, authorizationHeader);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody;
  } catch (error) {
    throw new Error("");
  }
};

export const fetchRestaurantDetailsDataAsync = async (id: string) => {
  try {
    const url = `${config.restaurantDetailUrl}/${id}`;
    const response = await fetch(url, authorizationHeader);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody;
  } catch (error) {
    throw new Error("");
  }
};

export const fetchRestaurantReviewsDataAsync = async (id: string) => {
  try {
    const url = `${config.restaurantDetailUrl}/${id}/reviews`;
    const response = await fetch(url, authorizationHeader);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw new Error(responseBody);
    }
    return responseBody;
  } catch (error) {
    throw new Error("");
  }
};
