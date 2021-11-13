import React, { useEffect, useState } from "react";
import { FilterInterface } from "../../interfaces/requests";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { Filter } from "./Filter";
import { useRestaurantsRequest } from "./useRestaurantsRequest";
// import { restaurants } from "./restaurantsData";
import { SecondaryButton, MainContainer } from "../Styled";

export const Main = () => {
  const { error, status, restaurants, getRestaurants } =
    useRestaurantsRequest();
  const [filter, setFilter] = useState<FilterInterface>({
    location: "LA",
    term: "restaurants",
  });
  useEffect(() => {
    getRestaurants(filter);
  }, []);
  return (
    <MainContainer>
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Filter />
      <RestaurantsList restaurants={restaurants?.businesses} />
      <div className="load-row">
        <SecondaryButton>LOAD MORE</SecondaryButton>
      </div>
    </MainContainer>
  );
};
