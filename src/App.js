import React from "react";
import { AppProvider, Box } from "./components";
import { theme } from "./tokens";
function App() {
  return (
    <AppProvider theme={theme}>
      <Box backgroundColor="black" width="100px" height="100px" />
    </AppProvider>
  );
}

export default App;
