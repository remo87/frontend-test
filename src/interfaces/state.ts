import { RestaurantDetail, RestuarantsList } from "./restaurants";

export interface RestaurantsState {
  status: string;
  restaurants?: RestuarantsList;
  error?: string;
}

export interface PendingAction {
  type: string;
}

export interface ErrorAction {
  type: string;
  payload: {
    error: string;
  };
}

export interface LoadRestaurantsAction {
  type: string;
  payload: {
    rerstaurants: RestuarantsList;
  };
}

export interface LoadRestaurantDetailsAction {
  type: string;
  payload: {
    rerstaurants: RestaurantDetail;
  };
}
