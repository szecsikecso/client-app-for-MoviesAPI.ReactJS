import React from "react";

import NotFoundImage from "./404-error.jpg";
import PageFooter from "../PageFooter";
import { Wrapper, PageTextFirstPart, PageLink, StyledLink } from "../utils/styledItems";

const notFoundTitle = "Page Not Found";

const NotFoundPage = ({ location }) => {
    return (
        <Wrapper>
            <PageLink href="/landing">
                <PageTextFirstPart>netflix</PageTextFirstPart>roulette
            </PageLink>
            <div className="page-title">{notFoundTitle} ({location.pathname})</div>
            <img className="page-image" src={NotFoundImage} alt={notFoundTitle} />
            <StyledLink className="page-link" href="landing">
                Go back to home
            </StyledLink>
            <PageFooter />
        </Wrapper>
    )
}

export default NotFoundPage;
