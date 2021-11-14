import {
  IErrorAction,
  ILoadReviewsAction,
  IPendingAction,
} from "../../../interfaces/state";
import { CONSTANTS } from "../CONSTANTS";
import { IReviewList } from "../../../interfaces/restaurants";

export const getPendingAction = (): IPendingAction => ({
  type: CONSTANTS.PENDING,
});

export const getErrorAction = (error: string): IErrorAction => ({
  type: CONSTANTS.REJECTED,
  payload: { error },
});

export const setRestaurantReviewsAction = (
  reviews: IReviewList
): ILoadReviewsAction => ({
  type: CONSTANTS.SET_REVIEWS,
  payload: { reviews },
});
