import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { ChevronDownIcon, ChevronUpIcon } from '../icons';

import { Box } from './Box';

const StyledArrowButton = styled(Box)`
  padding: 6px;
  border-radius: 2.52308px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${themeGet('colors.secondary')};
  }
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
`;

const ArrowButton = ({ direction, disabled, onClick = () => {}, ...props }) => (
  <StyledArrowButton onClick={onClick} disabled={disabled} {...props}>
    {direction === 'up' ? <ChevronUpIcon /> : <ChevronDownIcon />}
  </StyledArrowButton>
);

export { ArrowButton };
