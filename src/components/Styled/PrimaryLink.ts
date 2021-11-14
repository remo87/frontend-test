import styled from "./styled-components";

export const PrimaryButton = styled.a`
  background-color: ${({ theme }) => theme.colors.blueTwo};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1rem;
  font-size: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
`;
