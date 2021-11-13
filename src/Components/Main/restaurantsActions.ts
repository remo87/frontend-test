import { IRestaurantsList  } from "../../interfaces/restaurants";
import {
  IErrorAction,
  ILoadRestaurantsAction,
  IClearRestaurantsAction,
  IPendingAction,
} from "../../interfaces/state";
import { CONSTANTS } from "./CONSTANTS";

export const getPendingAction = (): IPendingAction => ({
  type: CONSTANTS.PENDING,
});

export const getErrorAction = (error: string): IErrorAction => ({
  type: CONSTANTS.REJECTED,
  payload: { error },
});

export const setRestaurantsAction = (
  rerstaurants: IRestaurantsList
): ILoadRestaurantsAction => ({
  type: CONSTANTS.SET_RESTAURANTS,
  payload: { rerstaurants },
});

export const getClearRestaurantsAction = (
): IClearRestaurantsAction => ({
  type: CONSTANTS.SET_RESTAURANTS,
});
