import React, { useEffect, useState } from "react";
import { IFilter } from "../../interfaces/requests";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { Filter } from "./Filter";
import { useRestaurantsRequest } from "./useRestaurantsRequest";
// import { restaurants } from "./restaurantsData";
import { SecondaryButton, MainContainer } from "../Styled";

export const Main = () => {
  const { error, status, restaurants, getRestaurants, clearRestaurants } =
    useRestaurantsRequest();
  const [filter, setFilter] = useState<IFilter>({
    location: "LA",
    term: "restaurants",
  });

  useEffect(() => {
    getRestaurants(filter);
  }, [filter]);

  const handleLoadMore = () => {
    if (restaurants) {
      setFilter((prev) => ({
        ...prev,
        offset: restaurants.businesses.length,
      }));
    }
  };

  return (
    <MainContainer>
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Filter />
      <RestaurantsList restaurants={restaurants?.businesses} />
      {restaurants && restaurants.total > restaurants.businesses.length ? (
        <div className="load-row">
          <SecondaryButton onClick={handleLoadMore}>LOAD MORE</SecondaryButton>
        </div>
      ) : null}
    </MainContainer>
  );
};
