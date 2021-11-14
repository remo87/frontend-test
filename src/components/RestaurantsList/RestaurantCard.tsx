import React from "react";
import { IRestaurantListItem } from "../../interfaces/restaurants";
import { Card, PrimaryButton, theme } from "../Styled";
import { ClosedTag, ClosedTagMobile, OpenTag, OpenTagMobile } from "../Tags";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindow";

interface Props {
  restaurant: IRestaurantListItem;
}

export const RestaurantCard = ({ restaurant }: Props) => {
  const size = useWindowSize();

  const isMobile = size.width && size.width < 600;

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
          {isMobile ? (
            <div>
              {restaurant.is_closed ? <ClosedTagMobile /> : <OpenTagMobile />}
            </div>
          ) : (
            <div>{restaurant.is_closed ? <ClosedTag /> : <OpenTag />}</div>
          )}
        </div>
        <Link className="mobile" to={`/${restaurant.id}`}>
          Learn More
        </Link>
      </div>
      <Link className="full" to={`/${restaurant.id}`}>
        LEARN MORE
      </Link>
    </Card>
  );
};
