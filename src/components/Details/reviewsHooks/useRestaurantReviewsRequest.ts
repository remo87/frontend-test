import { useReducer, useCallback } from "react";
import {
  fetchRestaurantReviewsDataAsync,
} from "../../../api/RestaurantsApi";
import { IRestaurantReviewsState } from "../../../interfaces/state";
import { restaurantReviewsReducer } from "./restaurantReviewsReducer";
import {
  getErrorAction,
  getPendingAction,
  setRestaurantReviewsAction,
} from "./restaurantReviewsActions";

const initialState: IRestaurantReviewsState = {
  status: "pending",
};

export const useRestaurantReviewsRequest = () => {
  const [state, dispatch] = useReducer(restaurantReviewsReducer, initialState);

  const getRestaurantReviews = useCallback(async (id: string) => {
    dispatch(getPendingAction());
    try {
      const reviews = await fetchRestaurantReviewsDataAsync(id);
      dispatch(setRestaurantReviewsAction(reviews));
    } catch (error: any) {
      dispatch(getErrorAction(error.message));
    }
  }, []);

  const { error, status, reviews } = state;

  return { error, status, reviews, getRestaurantReviews };
};
