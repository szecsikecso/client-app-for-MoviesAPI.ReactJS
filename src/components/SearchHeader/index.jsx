import React from "react";

import FindMovie from "../FindMovie";
import { SearchHeaderContainer } from "../utils/styledItems"

const SearchHeader = (props) => {
    return (
        <SearchHeaderContainer>
            <FindMovie
                searchQuery={props.searchQuery}
                handleSearchQuery={(searchQuery) => props.handleSearchQuery(searchQuery)}
                emptySearchQuery={props.emptySearchQuery}
            />
        </SearchHeaderContainer>
    );
};

export default SearchHeader;
