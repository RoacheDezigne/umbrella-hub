import React, { useContext } from 'react';

const PageContext = React.createContext({
  pageNumber: `pageModes.wide`,
});

const PageProvider = ({ pageNumber = 1, children }) => (
  <PageContext.Provider value={{ pageNumber }}>
    {children}
  </PageContext.Provider>
);

const usePageContext = () => useContext(PageContext);

const withPage = (ComponentToCompose) => (props) => {
  const pageContextValue = usePageContext();
  return <ComponentToCompose {...pageContextValue} {...props} />;
};

export { PageProvider, usePageContext, withPage };
