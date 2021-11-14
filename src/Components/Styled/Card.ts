import styled from "./styled-components";

export const Card = styled.div`
  height: 26.75rem;
  width: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .row {
    display: flex;
    justify-content: space-between;
  }

  & > .text-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  & h4 {
    margin-top: 1rem;
  }

  & .rating-container {
    margin-top: 0.5rem;
  }

  & > div span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.grayThree};
    letter-spacing: 0.03125rem;
    text-transform: uppercase;
    margin-top: 1rem;
  }

  & > img {
    height: 14.25em;
  }

  & > button {
    width: 100%;
  }

  & a {
    background-color: ${({ theme }) => theme.colors.blueTwo};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1rem;
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
    text-align: center;
    text-decoration: none;
  }

  & .mobile {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    height: unset;

    & > img {
      width: 7.25rem;
      height: 8.25rem;
    }

    & h4 {
      font-size: 1.25rem;
      line-height: 1.625rem;
      letter-spacing: 0.03125rem;
      color: ${({ theme }) => theme.colors.black};
      margin: 0;
    }

    & > .text-content {
      margin-left: 0.75rem;
    }

    & .full {
      display: none;
    }

    & .mobile {
      display: block;
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.blueTwo};
      text-align: start;
    }
  }
`;
