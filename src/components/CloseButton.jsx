import React from 'react';
import styled from 'styled-components';

import { CloseIcon } from '../icons';

import { Box } from './Box';

const StyledCloseButton = styled(Box)`
  cursor: pointer;
`;

const CloseButton = ({ onClick = () => {}, ...props }) => (
  <StyledCloseButton onClick={onClick} {...props}>
    <CloseIcon />
  </StyledCloseButton>
);

export { CloseButton };
