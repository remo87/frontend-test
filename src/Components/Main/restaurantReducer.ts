import {
  RestaurantsState,
  PendingAction,
  ErrorAction,
  LoadRestaurantsAction,
} from "../../interfaces/state";

type Actions = PendingAction & ErrorAction & LoadRestaurantsAction;

export const restaurantReducer = (state: RestaurantsState, action: any): RestaurantsState => {
  const { type, payload } = action;
  switch (type) {
    case "pending": {
      return {
        status: "pending",
        restaurants: undefined,
        error: undefined,
      };
    }
    case "resolved": {
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
          : state.restaurants,
        error: undefined,
      };
    }
    case "rejected": {
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
