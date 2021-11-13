export interface IRestaurantListItem {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
  categories: ICategoriesListItem[];
  review_count: number;
  name: string;
  url: string;
  coordinates: ICoordinates;
  image_url: string;
  location: ILocation;
  distance: number;
  transactions: string[];
}

export interface ILocation {
  city: string;
  country: string;
  address2: string;
  address3: string;
  state: string;
  address1: string;
  zip_code: string;
}

export interface ICategoriesListItem {
  alias: string;
  title: string;
}

export interface IRegion {
  center: ICoordinates;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IRestaurantsList {
  total: number;
  businesses: IRestaurantListItem[];
  region: IRegion;
}

export interface IRestaurantDetail {}
