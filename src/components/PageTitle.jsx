import React from "react";

import styled from "styled-components";

import { Box } from "./Box";
import { NumberCircle } from "./NumberCircle";
import { Text } from "./Text";

const PageTitleWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const PageTitle = ({number, title, ...props}) => (
  <PageTitleWrapper {...props}>
    <NumberCircle number={number} />
    <Text as="h2" variant="headerMedium" paddingLeft="21px">{title}</Text>
  </PageTitleWrapper>
);
