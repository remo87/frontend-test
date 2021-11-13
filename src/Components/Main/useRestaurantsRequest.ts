import { useReducer, useCallback } from "react";
import { fetchRestaurantsDataAsync } from "../../api/RestaurantsApi";
import { FilterInterface } from "../../interfaces/requests";
import { RestaurantsState } from "../../interfaces/state";
import { restaurantReducer } from "./restaurantReducer";
import {
  getErrorAction,
  getPendingAction,
  setRestaurantsAction,
  loadRestaurantsAction
} from "./restaurantsActions";

const initialState: RestaurantsState = {
  status: "pending",
};

export const useRestaurantsRequest = () => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  const getRestaurants = useCallback(async (filter: FilterInterface) => {
    dispatch(getPendingAction());
    try {
      const restaurants = await fetchRestaurantsDataAsync(filter);
      dispatch(setRestaurantsAction(restaurants));
    } catch (error: any) {
      dispatch(getErrorAction(error.message));
    }
  }, []);

  const loadRestaurants = useCallback(async (filter: FilterInterface) => {
    dispatch(getPendingAction());
    try {
      const restaurants = await fetchRestaurantsDataAsync(filter);
      dispatch(loadRestaurantsAction(restaurants));
    } catch (error: any) {
      dispatch(getErrorAction(error.message));
    }
  }, []);

  const { error, status, restaurants } = state;

  return { error, status, restaurants, getRestaurants, loadRestaurants };
};
