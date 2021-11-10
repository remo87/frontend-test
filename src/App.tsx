import React from "react";
import { theme } from "./Components/Styled/theme";
import { ThemeProvider } from "styled-components";
import { H1 } from "./Components/Styled/H1.styled";
import GlobalStyle from "./Components/Styled/Global";

export const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <H1>App Component</H1>
    </ThemeProvider>
  </>
);
