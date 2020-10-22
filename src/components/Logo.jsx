import React from 'react';

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box } from './Box';
import { Text } from './Text';
import { UmbrellaIcon } from '../icons';

const LogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

const LogoText = styled(Text)`
  color: ${themeGet('colors.primary')};
  font-size: 14.45px;
  padding-left: 8.63px;
  padding-top: 1px;
`;

export const Logo = (props) => (
  <LogoWrapper {...props}>
    <UmbrellaIcon />
    <LogoText as="span">Umbrella Hub</LogoText>
  </LogoWrapper>
);
