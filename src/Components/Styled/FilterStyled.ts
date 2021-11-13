import styled from "./styled-components";

export const FilterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;

  & > .fields > label {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.grayFour};
  }

  .fields {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }

  & button {
    width: 9.4375rem;
    height: 2.375rem;
  }
`;
