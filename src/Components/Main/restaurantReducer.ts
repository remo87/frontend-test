import {
  RestaurantsState,
  PendingAction,
  ErrorAction,
  LoadRestaurantsAction,
} from "../../interfaces/state";
import { CONSTANTS } from "./CONSTANTS";

export const restaurantReducer = (
  state: RestaurantsState,
  action: any
): RestaurantsState => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.PENDING: {
      return {
        status: "pending",
        restaurants: undefined,
        error: undefined,
      };
    }
    case CONSTANTS.SET_RESTAURANTS: {
      return {
        status: "resolved",
        restaurants: payload.rerstaurants,
        error: undefined,
      };
    }
    case CONSTANTS.REJECTED: {
      return {
        status: "rejected",
        restaurants: undefined,
        error: payload.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
