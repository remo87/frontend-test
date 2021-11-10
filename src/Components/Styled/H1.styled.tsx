import styled from "./styled-components";

export const H1 = styled.h1`
  font-size: 54px;
  line-height: 64px;
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    line-height: 40px;
  }
`;
