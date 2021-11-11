import React, { useEffect, useState } from "react";
import { Filter } from "../../interfaces/requests";
import { useRestaurantsRequest } from "./useRestaurantsRequest";

export const Main = () => {
  const { error, status, restaurants, getRestaurants } =
    useRestaurantsRequest();
  const [filter, setFilter] = useState<Filter>({
    location: "LA",
    term: "restaurants",
  });
  useEffect(() => {
    getRestaurants(filter);
  }, []);
  return (
    <>
      <h1>Restaurants</h1>
      <p></p>
    </>
  );
};
