import styled from "./styled-components";

interface IProps {
  enabled: boolean;
}

export const MobileIndicator = styled.span<IProps>`
  padding: 3px;
  border-radius: 10px;
  margin-top: 0;
  background-color: ${({ theme, enabled }) =>
    enabled ? theme.colors.enabledGreen : theme.colors.disabledRed};
`;
