import React from "react";
import styled from "styled-components";

import { Box, Logo } from "./components";
import { CloseIcon } from "./icons";

const StyledHeader = styled(Box)`
  display: flex;
  padding: 36px 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Header = (props) => (
  <StyledHeader as="header" {...props}>
    <Logo />
    <CloseIcon />
  </StyledHeader>
);
