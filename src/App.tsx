import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./components/Styled/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styled/Global";
import { Main } from "./components/Main";
import { StyledBody } from "./components/Styled/StyledBody";
import { Details } from "./components/Details";
import { Routing } from "./components/Common/Routing/Routing";

export const App = () => {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </ThemeProvider>
    </StyledBody>
  );
};
