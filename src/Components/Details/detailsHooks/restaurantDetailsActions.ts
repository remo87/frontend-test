import {
  IErrorAction,
  ILoadRestaurantDetailsAction,
  IPendingAction,
} from "../../../interfaces/state";
import { CONSTANTS } from "../CONSTANTS";
import { IRestaurantDetails } from "../../../interfaces/restaurants";

export const getPendingAction = (): IPendingAction => ({
  type: CONSTANTS.PENDING,
});

export const getErrorAction = (error: string): IErrorAction => ({
  type: CONSTANTS.REJECTED,
  payload: { error },
});

export const setRestaurantDetailssAction = (
  details: IRestaurantDetails
): ILoadRestaurantDetailsAction => ({
  type: CONSTANTS.SET_RESTAURANT_DETAILS,
  payload: { details },
});
