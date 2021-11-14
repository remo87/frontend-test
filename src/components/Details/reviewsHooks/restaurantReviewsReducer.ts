import { IRestaurantReviewsState } from "../../../interfaces/state";
import { CONSTANTS } from "../CONSTANTS";

export const restaurantReviewsReducer = (
  state: IRestaurantReviewsState,
  action: any
): IRestaurantReviewsState => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.PENDING: {
      return {
        ...state,
        status: "pending",
      };
    }
    case CONSTANTS.SET_REVIEWS: {
      return {
        status: "resolved",
        reviews: payload.reviews,
        error: undefined,
      };
    }
    case CONSTANTS.REJECTED: {
      return {
        status: "rejected",
        reviews: undefined,
        error: payload.error,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
