import React from 'react';
import styled from 'styled-components';

import { Box } from './Box';

const StyledCounter = styled(Box)`
  color: white;
  font-weight: 700;
  font-size: 18px;
`;

const Counter = ({ value, ...props }) => (
  <StyledCounter {...props}>{value}/7</StyledCounter>
);

export { Counter };
