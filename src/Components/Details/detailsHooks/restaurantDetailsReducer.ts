import { IRestaurantDetailState } from "../../../interfaces/state";
import { CONSTANTS } from "../CONSTANTS";

export const restaurantDetailsReducer = (
  state: IRestaurantDetailState,
  action: any
): IRestaurantDetailState => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.PENDING: {
      return {
        ...state,
        status: "pending",
      };
    }
    case CONSTANTS.SET_RESTAURANT_DETAILS: {
      return {
        status: "resolved",
        details: payload.details,
        error: undefined,
      };
    }
    case CONSTANTS.REJECTED: {
      return {
        status: "rejected",
        details: undefined,
        error: payload.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
