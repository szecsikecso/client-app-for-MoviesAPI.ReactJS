import React, { useEffect } from "react";
import { connect } from "react-redux";

import MovieDetails from "../MovieDetails";
import { fetchApiMovie } from "../actions";
import { moviesApiPrefix } from "../utils/api";
import { MovieHeaderContainer } from "../utils/styledItems"

const MovieHeader = ({ chosenMovieId, fetchApiMovie, movie, history }) => {

    useEffect(() => {
        const movieId = chosenMovieId.replace(moviesApiPrefix, "");
        fetchApiMovie(movieId, history);
    }, [chosenMovieId, fetchApiMovie, history]);

    return (
        <MovieHeaderContainer>
            <MovieDetails movie={movie} />
        </MovieHeaderContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
    };
};

export default connect(mapStateToProps, { fetchApiMovie })(MovieHeader);
