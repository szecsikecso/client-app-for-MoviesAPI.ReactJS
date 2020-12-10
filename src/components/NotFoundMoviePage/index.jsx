import React from "react";

import NotFoundImage from "./404-error.jpg";
import PageFooter from "../PageFooter";
import { Wrapper, PageTextFirstPart, PageLink, StyledLink } from "../utils/styledItems";

const notFoundTitle = "Movie Not Found";

const NotFoundMoviePage = ({ movieId }) => {
    return (
        <Wrapper>
            <PageLink href="/landing">
                <PageTextFirstPart>netflix</PageTextFirstPart>roulette
            </PageLink>
    <div className="page-title">{notFoundTitle} ({movieId})</div>
            <img className="page-image" src={NotFoundImage} alt={notFoundTitle} />
            <StyledLink className="page-link" href="landing">
                Go back to home
            </StyledLink>
            <PageFooter />
        </Wrapper>
    )
}

export default NotFoundMoviePage;
