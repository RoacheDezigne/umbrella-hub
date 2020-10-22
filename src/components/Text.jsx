import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from './Box';

const StyledText = styled(Box)(
  {
    fontFamily: 'inherit',
    marginTop: 0,
    marginBottom: 0,
  },
  variant({
    prop: 'variant',
    scale: 'textVariants',
  }),
);

const Text = ({
  variant = 'copyMedium',
  // semanticElement,
  children,
  ...props
}) => {
  return (
    <StyledText variant={variant} as="p" {...props}>
      {children}
    </StyledText>
  );
};

export { Text };
