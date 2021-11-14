import React, { useEffect, useState } from "react";
import { theme } from "./components/Styled/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styled/Global";
import { Main } from "./components/Main";
import { StyledBody } from "./components/Styled/StyledBody";
import { Details } from "./components/Details/Details";

export const App = () => {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Main></Main> */}
        <Details id="kdTFcDSl9vAR-btEm1Q2uw" />
      </ThemeProvider>
    </StyledBody>
  );
};
