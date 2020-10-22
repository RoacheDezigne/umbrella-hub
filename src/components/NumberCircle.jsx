import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import { Box } from "./Box";

const StyledNumberCircle = styled(Box)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${themeGet("colors.secondary")};
  color: ${themeGet("colors.primary")};
  line-height: 36px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  flex: none;
`;

const NumberCircle = ({ number, ...props }) => (
  <StyledNumberCircle {...props}>{number}</StyledNumberCircle>
);

export { NumberCircle };
