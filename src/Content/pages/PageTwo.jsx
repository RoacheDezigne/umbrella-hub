import React, { forwardRef } from 'react';

import { Page } from '../../components';

export const PageTwo = forwardRef(({ isCurrentPage, ...props }, ref) => (
  <Page
    ref={ref}
    title="What’s the name of your business?"
    number={2}
    isCurrentPage={isCurrentPage}
    {...props}
  ></Page>
));
