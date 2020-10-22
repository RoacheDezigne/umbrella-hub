import React from 'react';
import styled from 'styled-components';

import { Box, Page } from '../../components';
import { usePageContext } from '../helpers/PageContext';

import { PageOne, PageTwo } from './pages';

const StyledContent = styled(Box)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
  height: 100%;
  overflow: hidden;
  position: absolute;
  padding: 96px 0;
`;

export const Content = ({ ...props }) => {
  const { pageIndex, refArray } = usePageContext();

  return (
    <StyledContent {...props}>
      <PageOne
        ref={(el) => {
          refArray[0] = el;
        }}
        isCurrentPage={pageIndex === 0}
      />
      <PageTwo
        ref={(el) => {
          refArray[1] = el;
        }}
        isCurrentPage={pageIndex === 1}
      />
      <Page
        ref={(el) => {
          refArray[2] = el;
        }}
        isCurrentPage={pageIndex === 2}
      />
      <Page
        ref={(el) => {
          refArray[3] = el;
        }}
        isCurrentPage={pageIndex === 3}
      />
      <Page
        ref={(el) => {
          refArray[4] = el;
        }}
        isCurrentPage={pageIndex === 4}
      />
      <Page
        ref={(el) => {
          refArray[5] = el;
        }}
        isCurrentPage={pageIndex === 5}
      />
      <Page
        ref={(el) => {
          refArray[6] = el;
        }}
        isCurrentPage={pageIndex === 6}
      />
    </StyledContent>
  );
};
