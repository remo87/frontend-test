import React from "react";
import StarRatings from "react-star-ratings";
import { IReview } from "../../interfaces/restaurants";
import { HR, Row, theme } from "../Styled";
import styled from "../Styled/styled-components";

interface IProps {
  review: IReview;
}

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
`;

const CardContainer = styled.div`
  & hr {
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
`;

const TextContainer = styled.div`
  flex: 6;

  & p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.0625rem;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 1.2225rem;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex: 2;

  & p {
    margin: 0;
    margin-bottom: 0.375rem;
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.375rem;
    line-height: 1.5rem;
    letter-spacing: 0.0572916875rem;
  }

  & img {
    margin-right: 2rem;
  }

  & span {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ReviewCard = ({ review }: IProps) => (
  <CardContainer>
    <Row>
      <UserContainer>
        <Avatar src={review.user.image_url} />
        <div>
          <p>{review.user.name}</p>
          <span>{review.time_created}</span>
        </div>
      </UserContainer>
      <TextContainer>
        <div className="rating-container">
          <StarRatings
            rating={review.rating}
            starRatedColor={theme.colors.blueTwo}
            numberOfStars={5}
            name="rating"
            starDimension="1.22rem"
            starSpacing="0.07421875rem"
          />
          <p>{review.text}</p>
        </div>
      </TextContainer>
    </Row>
    <HR />
  </CardContainer>
);
