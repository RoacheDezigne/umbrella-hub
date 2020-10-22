import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box } from './Box';
import { Text } from './Text';

const TextWrapper = styled(Box)`
  padding-left: 16.25px;
`;

const StyledCardButton = styled(Box)`
  padding: 25px 20px;
  border-radius: 2.52308px;
  background-color: white;
  border: 1px solid ${themeGet('colors.grey50')};
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: ${themeGet('colors.grey10')};
  }
  &:active {
    background-color: ${themeGet('colors.secondary')};
  }
`;

const CardButton = ({
  icon,
  title,
  description,
  onClick = () => {},
  ...props
}) => (
  <StyledCardButton {...props} onClick={onClick}>
    {icon}
    <TextWrapper>
      <Text variant="title">{title}</Text>
      <Text variant="subtitle">{description}</Text>
    </TextWrapper>
  </StyledCardButton>
);

export { CardButton };
