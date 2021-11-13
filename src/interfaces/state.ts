import { IRestaurantDetail, IRestaurantsList } from "./restaurants";

export interface IRestaurantsState {
  status: string;
  restaurants?: IRestaurantsList;
  error?: string;
}

export interface IPendingAction {
  type: string;
}

export interface IErrorAction {
  type: string;
  payload: {
    error: string;
  };
}

export interface ILoadRestaurantsAction {
  type: string;
  payload: {
    rerstaurants: IRestaurantsList;
  };
}

export interface IClearRestaurantsAction {
  type: string;
}

export interface ILoadRestaurantDetailsAction {
  type: string;
  payload: {
    rerstaurants: IRestaurantDetail;
  };
}
