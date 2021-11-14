import styled from "./styled-components";

export const FilterStyledMobile = styled.div`
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
    width: 45%;
    flex-direction: column;
    width: 100%;
  }

  & button {
    width: 9.4375rem;
    height: 2.375rem;
  }

  & .secondary {
    color: ${({ theme }) => theme.colors.graySix};
    line-height: 1rem;
    font-size: 0.875rem;
  }

  & .label {
    color: ${({ theme }) => theme.colors.black};
    line-height: 1rem;
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  & .react-toggle-track {
    height: 11px;
  }
  & .react-toggle-thumb {
    top: -5px;
  }
`;
