import React from 'react';
import styled from 'styled-components';

import { usePageContext } from '../PageContext';

import { Box } from './Box';
import { ArrowButton } from './ArrowButton';

const StyledNavigation = styled(Box)`
  display: flex;
  width: 80.42px;
  justify-content: space-between;
`;

export const Navigation = ({ ...props }) => {
  const { setPageIndex, pageIndex } = usePageContext();

  return (
    <StyledNavigation {...props}>
      <ArrowButton
        direction="up"
        disabled={pageIndex === 0}
        onClick={() => setPageIndex(pageIndex - 1)}
      />
      <ArrowButton
        direction="down"
        disabled={pageIndex === 6}
        onClick={() => setPageIndex(pageIndex + 1)}
      />
    </StyledNavigation>
  );
};
