import { RestuarantsList } from "../../interfaces/restaurants";
import {
  ErrorAction,
  LoadRestaurantsAction,
  PendingAction,
} from "../../interfaces/state";

export const getPendingAction = (): PendingAction => ({
  type: "pending",
});

export const getErrorAction = (error: string): ErrorAction => ({
  type: "pending",
  payload: { error },
});

export const getLoadRestaurantsAction = (
  rerstaurants: RestuarantsList
): LoadRestaurantsAction => ({
  type: "pending",
  payload: { rerstaurants },
});
