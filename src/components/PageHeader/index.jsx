import AddMovieOverlay from "../AddMovieOverlay";
import MovieHeader from "../MovieHeader";
import React from "react";
import { SearchButton } from "../utils/styledItems";
import SearchHeader from "../SearchHeader";
import { SearchIcon } from "../utils/icons";

const PageHeader = (props) => {

    if (!props.chosenMovieId) {
        return (
            <>
                <AddMovieOverlay />
                <SearchHeader
                    searchQuery={props.searchQuery}
                    handleSearchQuery={(searchQuery) => props.handleSearchQuery(searchQuery)}
                    emptySearchQuery={props.emptySearchQuery}
                />
            </>
        )
    } else {
        return (
            <>
                <SearchButton onClick={() => { props.handleChosenMovie(0); }} >
                    <SearchIcon />
                </SearchButton>
                <MovieHeader chosenMovieId={props.chosenMovieId} history={props.history} />
            </>
        )
    }
};

export default PageHeader;
