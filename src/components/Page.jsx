import React from "react";
import styled from "styled-components";

import { Box } from "./Box";
import { PageTitle } from "./PageTitle";

const StyledPage = styled(Box)`
  display: flex;
  padding: 36px 30px;
`;

const pageContents = [
    {
        title: "What type of insurance are you looking for?"
    },
    {
        title: "What's the name of your business?"
    }
];

export const Page = ({number, ...props}) => {
    const pageContent = pageContents[number-1];
    
    return (
        <StyledPage {...props}>
            <PageTitle number={number} {...pageContent} />
        </StyledPage>
    );
};
