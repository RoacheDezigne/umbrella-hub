import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`;

export const AppProvider = ({ theme = {}, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
