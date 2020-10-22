import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Counter, Navigation } from './components';
import { usePageContext } from './PageContext';

const StyledFooter = styled(Box)`
  display: flex;
  padding: 11px 31px;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeGet('colors.primary')};
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
`;

export const Footer = ({ ...props }) => {
  const { pageIndex } = usePageContext();

  return (
    <StyledFooter as="footer" {...props}>
      <Counter value={pageIndex + 1} />

      <Navigation />
    </StyledFooter>
  );
};
