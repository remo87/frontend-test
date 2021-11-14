import React, { useEffect, useState } from "react";
import { IFilter } from "../../interfaces/requests";
import { RestaurantsList } from "../RestaurantsList/RestaurantsList";
import { Filter } from "./Filter";
import { useRestaurantsRequest } from "./useRestaurantsRequest";
import { SecondaryButton, MainContainer } from "../Styled";
import { LoadingOverlay } from "../Common/LoadingOverlay/LoadingOverlay";
import { useWindowSize } from "../../hooks/useWindow";
import { MobileFilter } from "./MobileFilter";

export const Main = () => {
  const { error, status, restaurants, getRestaurants, clearRestaurants } =
    useRestaurantsRequest();
  const { width, height } = useWindowSize();
  const [filter, setFilter] = useState<IFilter>({
    location: "LA",
    term: "restaurants",
  });
  const [showMobileFilter, setShowMobileFilter] = useState(false);

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

  const handleSetFilter = (filter: IFilter) => {
    clearRestaurants();
    setFilter(filter);
  };

  const isLoading = status === "pending";
  const isMobile = width && width < 600;
  const shouldShowMoreButton =
    restaurants && restaurants.total > restaurants.businesses.length;

  if (isMobile && showMobileFilter)
    return (
      <MobileFilter
        filter={filter}
        onSetFilter={handleSetFilter}
        show={showMobileFilter}
        setShow={setShowMobileFilter}
      />
    );

  return (
    <MainContainer>
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {isMobile ? (
        <MobileFilter
          filter={filter}
          onSetFilter={handleSetFilter}
          show={showMobileFilter}
          setShow={setShowMobileFilter}
        />
      ) : (
        <Filter filter={filter} onSetFilter={handleSetFilter} />
      )}
      <RestaurantsList restaurants={restaurants?.businesses} />
      {shouldShowMoreButton ? (
        <div className="load-row">
          <SecondaryButton onClick={handleLoadMore}>LOAD MORE</SecondaryButton>
        </div>
      ) : null}
      {isLoading ? <LoadingOverlay /> : null}
    </MainContainer>
  );
};
