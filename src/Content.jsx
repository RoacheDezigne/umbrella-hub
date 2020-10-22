import React from "react";
import styled from "styled-components";

import { Box, Page } from "./components";

import { usePageContext } from './PageContext';

const StyledContent = styled(Box)``;


export const Content = ({...props}) => {
  const { pageNumber } = usePageContext();

  return (
  <StyledContent {...props}>
    <Page number={pageNumber} />
  </StyledContent>
)};
