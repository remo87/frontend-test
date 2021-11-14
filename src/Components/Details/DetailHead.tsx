import React from "react";
import StarRatings from "react-star-ratings";
import { IRestaurantDetails } from "../../interfaces/restaurants";
import styled from "../Styled/styled-components";
import { ClosedTag, OpenTag } from "../Tags";
import { theme, Row, HR } from "../Styled";
import { MapContainer } from "./MapContainer";

interface IProps {
  details: IRestaurantDetails;
}

const HeadContainer = styled.div`
  & h1 {
    margin-bottom: 1rem;
  }

  & hr {
    margin-top: 3.0625rem;
    margin-bottom: 3.0625rem;
  }
  
  & .address {
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.0625rem;
    margin-top: 1rem;
    margin-bottom: 3.0625rem;
  }
`;

const PhotoBar = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  margin-left: 2rem;
  padding: 0;
  overflow: scroll;

  & img {
    margin-right: 2rem;
    width: 19rem;
    height: 14.25rem;
  }
`;

const PhotoItem = styled.li``;

const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1.470625rem;

  & .cat {
    font-size: 1.375rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DetailHead = ({ details }: IProps) => (
  <HeadContainer>
    <div>
      <h1>{details?.name}</h1>
      <div className="rating-container">
        <StarRatings
          rating={details?.rating}
          starRatedColor={theme.colors.blueTwo}
          numberOfStars={5}
          name="rating"
          starDimension="1.908125rem"
          starSpacing="0.07421875rem"
        />
        <RowHead>
          <span className="cat">
            {details?.categories[0].title} - {details?.price}
          </span>
          <div>{details?.is_closed ? <ClosedTag big /> : <OpenTag big />}</div>
        </RowHead>
      </div>
      <HR />
    </div>
    <Row>
      <div><MapContainer coordinates={details?.coordinates} /></div>
      <PhotoBar>
        {details?.photos.map((photo) => (
          <PhotoItem key={photo}>
            <img src={photo} alt={details?.name} />
          </PhotoItem>
        ))}
      </PhotoBar>
    </Row>
    <Row>
      <span className="address">{details?.location.display_address}</span>
    </Row>
  </HeadContainer>
);
