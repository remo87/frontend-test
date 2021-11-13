import React from "react";
import {
  IRestaurantListItem,
  IRestaurantsList,
} from "../../interfaces/restaurants";
import { CardsContainer } from "../Styled";
import { RestaurantCard } from "./RestaurantCard";

interface IProps {
  restaurants?: IRestaurantListItem[];
}

export const RestaurantsList = ({ restaurants }: IProps) => {
  return (
    <div>
      <h2>All Restaurants</h2>
      {restaurants ? (
        <CardsContainer>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </CardsContainer>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
