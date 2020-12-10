import React from "react";

import { PageContentTitle } from "../utils/styledItems";

const notFoundTitle = "No Movie Found";

const NotFoundMoviePage = ({ query }) => {
    return (
        <PageContentTitle>{notFoundTitle} ({query})</PageContentTitle>
    )
}

export default NotFoundMoviePage;
