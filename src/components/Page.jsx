import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Box } from './Box';
import { PageTitle } from './PageTitle';

const StyledPage = styled(Box)`
  min-height: calc(100% - 200px);
  padding: 15px 31px;
  align-items: flex-start;
  opacity: ${({ isCurrentPage }) => (isCurrentPage ? '1' : '0.3')};
`;

export const Page = forwardRef(
  ({ title, number, children, isCurrentPage = false, ...props }, ref) => (
    <StyledPage isCurrentPage={isCurrentPage} ref={ref} {...props}>
      <PageTitle number={number} title={title} />
      {children}
    </StyledPage>
  ),
);
