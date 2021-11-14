import { useReducer, useCallback } from "react";
import { fetchRestaurantsDataAsync } from "../../api/RestaurantsApi";
import { IFilter } from "../../interfaces/requests";
import { IRestaurantsState } from "../../interfaces/state";
import { restaurantReducer } from "./restaurantReducer";
import {
  getClearRestaurantsAction,
  getErrorAction,
  getPendingAction,
  setRestaurantsAction,
} from "./restaurantsActions";

const initialState: IRestaurantsState = {
  status: "pending",
};

export const useRestaurantsRequest = () => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  const getRestaurants = useCallback(async (filter: IFilter) => {
    dispatch(getPendingAction());
    try {
      const restaurants = await fetchRestaurantsDataAsync(filter);
      dispatch(setRestaurantsAction(restaurants));
    } catch (error: any) {
      dispatch(getErrorAction(error.message));
    }
  }, []);

  const clearRestaurants = () => {
    dispatch(getClearRestaurantsAction());
  };

  const { error, status, restaurants } = state;

  return { error, status, restaurants, getRestaurants, clearRestaurants };
};
