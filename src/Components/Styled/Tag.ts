import styled from "./styled-components";

interface IProps {
  enabled: boolean;
  big?: boolean;
}

export const Tag = styled.div<IProps>`
  display: flex;
  align-items: center;

  & > .indicator {
    border-radius: 50px;
    height: ${({ big }) => (big ? "1.375rem" : "0.5rem")};
    width: ${({ big }) => (big ? "1.375rem" : "0.5rem")};
    margin-right: 0.25rem;
    background-color: ${({ theme, enabled }) =>
      enabled ? theme.colors.enabledGreen : theme.colors.disabledRed};
  }

  & > .text {
    font-size: ${({ big }) => (big ? "1.375rem" : "0.75rem")};
  }

`;
