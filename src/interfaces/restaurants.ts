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

export interface ILocationDetail {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets: string;
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

export interface IReviewList {
  reviews: IReview[];
  total: number;
  possible_languages: string[];
}

export interface ICategories {
  categories: ICategory[];
}

export interface ICategory {
  alias: string;
  title: string;
  parent_aliases: string[];
  country_whitelist: string[];
  country_blacklist: string[];
}

export interface IHour {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

export interface ISpecialHour {
  date: string;
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

export interface IHourDetails {
  open: IHour[];
  hours_type: string;
  is_open_now: boolean;
}

export interface IRestaurantDetails {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: ICategoriesListItem[];
  rating: number;
  location: ILocationDetail;
  coordinates: ICoordinates;
  photos: string[];
  price: string;
  hours: IHourDetails[];
  transactions: string[];
  special_hours: ISpecialHour[];
}

export interface IUser {
  id: string;
  profile_url: string;
  image_url: string;
  name: string;
}

export interface IReview {
  id: string;
  rating: number;
  user: IUser;
  text: string;
  time_created: string;
  url: string;
}
