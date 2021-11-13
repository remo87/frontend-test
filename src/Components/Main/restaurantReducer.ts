import { IRestaurantsState } from "../../interfaces/state";
import { CONSTANTS } from "./CONSTANTS";

export const restaurantReducer = (
  state: IRestaurantsState,
  action: any
): IRestaurantsState => {
  const { type, payload } = action;
  debugger;
  switch (type) {
    case CONSTANTS.PENDING: {
      return {
        ...state,
        status: "pending",
      };
    }
    case CONSTANTS.SET_RESTAURANTS: {
      return {
        status: "resolved",
        restaurants: state.restaurants
          ? {
              ...state.restaurants,
              businesses: [
                ...state.restaurants.businesses,
                ...payload.rerstaurants.businesses,
              ],
            }
          : payload.rerstaurants,
        error: undefined,
      };
    }
    case CONSTANTS.CLEAR_RESTAURANTS: {
      return {
        ...state,
        restaurants: undefined,
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
