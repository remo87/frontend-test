import styled from "./styled-components";

export const SecondaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blueThree};
  border: 1px solid ${({ theme }) => theme.colors.blueTwo};
  line-height: 1rem;
  font-size: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 26rem;
  height: 3rem;
`;
