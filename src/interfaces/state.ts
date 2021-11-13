import { IRestaurantDetail, IRestaurantsList } from "./restaurants";

export interface RestaurantsState {
  status: string;
  restaurants?: IRestaurantsList;
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
    rerstaurants: IRestaurantsList;
  };
}

export interface LoadRestaurantDetailsAction {
  type: string;
  payload: {
    rerstaurants: IRestaurantDetail;
  };
}
