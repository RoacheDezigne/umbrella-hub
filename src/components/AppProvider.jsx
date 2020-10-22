import React from "react";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import { normalize } from "polished";

const additionalGlobalStyles = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${additionalGlobalStyles}
`;

const GlobalFontImport = () => `
  @import
  url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Work+Sans:400,500,600,700);
`;

export const AppProvider = ({ theme = {}, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <style>
      <GlobalFontImport />
    </style>
    {children}
  </ThemeProvider>
);
