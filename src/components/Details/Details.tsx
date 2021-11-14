import React, { useEffect } from "react";
import { useRestaurantReviewsRequest } from "./reviewsHooks/useRestaurantReviewsRequest";
import { useRestaurantDetailsRequest } from "./detailsHooks/useRestaurantDetailsRequest";
import { DetailHead } from "./DetailHead";
import { HR } from "../Styled";
import { Reviews } from "./Reviews";

interface IProps {
  id: string;
}

export const Details = ({ id }: IProps) => {
  const {
    error: errorDetails,
    status: statusDetails,
    details,
    getRestaurantDetails,
  } = useRestaurantDetailsRequest();
  const {
    error: errorReviews,
    status: statusReviews,
    reviews,
    getRestaurantReviews,
  } = useRestaurantReviewsRequest();

  useEffect(() => {
    getRestaurantDetails(id);
    getRestaurantReviews(id);
  }, []);

  return (
    <div>
      {details ? <DetailHead details={details} /> : <span>Loading</span>}
      <HR />
      {reviews ? <Reviews reviews={reviews} /> : <span>Loading</span>}
    </div>
  );
};
