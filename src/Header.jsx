import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Logo } from './components';
import { CloseIcon } from './icons';

const StyledHeader = styled(Box)`
  display: flex;
  padding: 36px 30px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${themeGet('colors.cloud')};
  top: 0;
`;

export const Header = (props) => (
  <StyledHeader as="header" {...props}>
    <Logo />
    <CloseIcon />
  </StyledHeader>
);
