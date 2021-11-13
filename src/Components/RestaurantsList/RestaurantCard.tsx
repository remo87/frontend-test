import React from "react";
import { IRestaurantListItem } from "../../interfaces/restaurants";
import { Card, PrimaryButton, theme } from "../Styled";
import { ClosedTag, OpenTag } from "../Tags";
import StarRatings from "react-star-ratings";

interface Props {
  restaurant: IRestaurantListItem;
}

export const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card>
      <img src={restaurant.image_url} alt="" />
      <div className="text-content">
        <h4>{restaurant.name}</h4>
        <div className="rating-container">
          <StarRatings
            rating={restaurant.rating}
            starRatedColor={theme.colors.blueTwo}
            numberOfStars={5}
            name="rating"
            starDimension="1.18rem"
            starSpacing="0.07421875rem"
          />
        </div>
        <div className="row">
          <span>
            {restaurant.categories[0].title} - {restaurant.price}
          </span>
          <div>{restaurant.is_closed ? <ClosedTag /> : <OpenTag />}</div>
        </div>
      </div>
      <PrimaryButton>LEARN MORE</PrimaryButton>
    </Card>
  );
};
