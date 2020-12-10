import React from "react";

import MovieFilterAndSortForm from "./MovieFilterAndSortForm";
import { genres } from "../Landing/initGenres";
import { FilterContainer, StyledFilterLink, StyledSortContainer } from "../utils/styledItemsForMovieList";

const MovieFilterAndSort = ({ handleChosenSorting, chosenSorting, handleChosenGenre, chosenGenre }) => {

    return (
        <>
            <FilterContainer>
                {Object.keys(genres).map((optionId, optionIndex) => {
                    const selectedOption = genres[optionId] === chosenGenre;
                    return (
                        <StyledFilterLink
                            href="#"
                            className={selectedOption ? "selected" : ""}
                            value={optionId}
                            key={optionId}
                            onClick={e => { /*e.persist();*/ handleChosenGenre(e.target.innerHTML); }}
                        >
                            {genres[optionId]}
                        </StyledFilterLink>
                    );
                })}
            </FilterContainer>
            <StyledSortContainer>
                <MovieFilterAndSortForm handleChosenSorting={(sorting) => handleChosenSorting(sorting)} chosenSorting={chosenSorting} />
            </StyledSortContainer>
        </>
    );
};

export default MovieFilterAndSort;
