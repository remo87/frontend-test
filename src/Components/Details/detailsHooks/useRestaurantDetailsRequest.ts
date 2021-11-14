import { useReducer, useCallback } from "react";
import { fetchRestaurantDetailsDataAsync } from "../../../api/RestaurantsApi";
import { IRestaurantDetailState } from "../../../interfaces/state";
import { restaurantDetailsReducer } from "./restaurantDetailsReducer";
import {
  getErrorAction,
  getPendingAction,
  setRestaurantDetailssAction,
} from "./restaurantDetailsActions";

const initialState: IRestaurantDetailState = {
  status: "pending",
};

export const useRestaurantDetailsRequest = () => {
  const [state, dispatch] = useReducer(restaurantDetailsReducer, initialState);

  const getRestaurantDetails = useCallback(async (id: string) => {
    dispatch(getPendingAction());
    try {
      const restaurant = await fetchRestaurantDetailsDataAsync(id);
      dispatch(setRestaurantDetailssAction(restaurant));
    } catch (error: any) {
      dispatch(getErrorAction(error.message));
    }
  }, []);

  const { error, status, details } = state;

  return { error, status, details, getRestaurantDetails };
};
