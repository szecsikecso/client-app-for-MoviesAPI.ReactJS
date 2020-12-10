import React from "react";
import { connect } from "react-redux";

import MovieFilterAndSort from "../MovieFilterAndSort";
import MovieItem from "../MovieItem";
import { MovieContainer, MovieCount, MovieCountContainer, MovieStuffContainer } from "../utils/styledItemsForMovieList";

const MovieList = ({ handleChosenMovie, handleChosenSorting, chosenSorting, handleChosenGenre, chosenGenre, apiMovies }) => {

  const renderApiMovieCards = apiMovies.map((movie) => (
    <MovieItem apiMovie={true} handleChosenMovie={(movieId) => handleChosenMovie(movieId, false)} key={movie.id} movie={movie}></MovieItem>
  ));

  return <>
    <MovieStuffContainer>
      <MovieFilterAndSort
        handleChosenSorting={(sorting) => handleChosenSorting(sorting)}
        chosenSorting={chosenSorting}
        handleChosenGenre={(genre) => handleChosenGenre(genre)}
        chosenGenre={chosenGenre}
      />
    </MovieStuffContainer>
    <MovieCountContainer><MovieCount>{apiMovies.length}</MovieCount> movies found</MovieCountContainer>
    <MovieContainer>
      {renderApiMovieCards}
    </MovieContainer>
  </>
};

const mapStateToProps = (state) => {
  return {
    apiMovies: state.apiMovies.apiMovies,
  };
};

export default connect(mapStateToProps)(MovieList);
