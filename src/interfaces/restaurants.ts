export interface RestauratListItem {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
  categories: CategoriesListItem[];
  review_count: number;
  name: string;
  url: string;
  coordinates: Coordinates;
  image_url: string;
  location: Location;
  distance: number;
  transactions: string[];
}

export interface Location {
  city: string;
  country: string;
  address2: string;
  address3: string;
  state: string;
  address1: string;
  zip_code: string;
}

export interface CategoriesListItem {
  alias: string;
  title: string;
}

export interface Region {
  center: Coordinates;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface RestuarantsList {
  total: number;
  businesses: RestauratListItem[];
  region: Region;
}

export interface RestaurantDetail {
    
}
