import React, { useContext } from 'react';

const PageContext = React.createContext({
  pageIndex: 0,
  setPageIndex: () => {},
  refArray: [],
});

const PageProvider = ({
  pageIndex = 0,
  setPageIndex = () => {},
  refArray = [],
  children,
}) => (
  <PageContext.Provider value={{ pageIndex, setPageIndex, refArray }}>
    {children}
  </PageContext.Provider>
);

const usePageContext = () => useContext(PageContext);

// const withPageContext = (ComponentToCompose) => (props) => {
//   const pageContextValue = usePageContext();
//   return <ComponentToCompose {...pageContextValue} {...props} />;
// };

export { PageProvider, usePageContext };
