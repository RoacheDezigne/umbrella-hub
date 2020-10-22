import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Counter } from './components';

import { usePageContext } from './PageContext';

const StyledFooter = styled(Box)`
  display: flex;
  padding: 36px 30px;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeGet('colors.primary')};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer = ({ ...props }) => {
  const { pageNumber } = usePageContext();

  return (
    <StyledFooter as="footer" {...props}>
      <Counter value={pageNumber} />
    </StyledFooter>
  );
};
