import { IRestaurantsList  } from "../../interfaces/restaurants";
import {
  ErrorAction,
  LoadRestaurantsAction,
  PendingAction,
} from "../../interfaces/state";
import { CONSTANTS } from "./CONSTANTS";

export const getPendingAction = (): PendingAction => ({
  type: CONSTANTS.PENDING,
});

export const getErrorAction = (error: string): ErrorAction => ({
  type: CONSTANTS.REJECTED,
  payload: { error },
});

export const setRestaurantsAction = (
  rerstaurants: IRestaurantsList
): LoadRestaurantsAction => ({
  type: CONSTANTS.SET_RESTAURANTS,
  payload: { rerstaurants },
});

export const loadRestaurantsAction = (
  rerstaurants: IRestaurantsList
): LoadRestaurantsAction => ({
  type: CONSTANTS.SET_RESTAURANTS,
  payload: { rerstaurants },
});
