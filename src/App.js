import React, { useState } from 'react';

import { AppProvider } from './components';
import { theme } from './tokens';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { PageProvider } from './PageContext';

const App = () => {
  const [currentPageNum] = useState(2);

  return (
    <AppProvider theme={theme}>
      <PageProvider pageNumber={currentPageNum}>
        <Header />
        <Content />
        <Footer />
      </PageProvider>
    </AppProvider>
  );
};

export default App;
