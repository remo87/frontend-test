import React from "react";
import { IReviewList } from "../../interfaces/restaurants";
import { ReviewCard } from "./ReviewCard";
import { theme } from "../Styled";
import styled from "../Styled/styled-components";

interface IProps {
  reviews: IReviewList;
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  & .total {
    font-size: 1.375rem;
    line-height: 2rem;
    letter-spacing: 0.0572916875rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Reviews = ({ reviews }: IProps) => (
  <ReviewsContainer>
    <span className="total">{reviews?.total} Reviews</span>
    {reviews.reviews.map((review) => (
      <ReviewCard review={review} />
    ))}
  </ReviewsContainer>
);
