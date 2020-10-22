import React, { useState, useRef } from 'react';

import { AppProvider } from './components';
import { theme } from './theme';
import { Header, Content, Footer } from './sections/';
import { PageProvider } from './sections/helpers/PageContext';

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const refArray = useRef([]);

  const changePage = (newPageIndex) => {
    if (newPageIndex < 0 || newPageIndex > 6) return;

    setPageIndex(newPageIndex);
    refArray.current[newPageIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <AppProvider theme={theme}>
      <PageProvider
        setPageIndex={changePage}
        pageIndex={pageIndex}
        refArray={refArray.current}
      >
        <Header />
        <Content />
        <Footer />
      </PageProvider>
    </AppProvider>
  );
};

export default App;
