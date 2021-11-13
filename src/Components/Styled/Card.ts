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
`;
