import React, { useEffect, useState } from "react";
import { theme } from "./components/Styled/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/Styled/Global";

export const App = () => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Test</h1>
      </ThemeProvider>
    </>
  );
};
