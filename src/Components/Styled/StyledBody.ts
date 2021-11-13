import styled from "./styled-components";

export const StyledBody = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 2.25rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 2.625rem 1.5rem auto 1.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.tablet}) and (min-width: ${({ theme }) => theme.mobile}) {
    margin: 2.625rem 1.5rem auto 1.5rem;
  }
`;
