import styled from "./styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-column-gap: 0;
    grid-template-columns: auto;
  }
  
  @media (max-width: ${({ theme }) => theme.tablet}) and (min-width: ${({ theme }) => theme.mobile}) {
    grid-column-gap: 2rem;
    grid-template-columns: repeat(2, auto);
  }
`;
