import { PageLink, PageTextFirstPart, Wrapper } from "../utils/styledItems";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import Loader from "../Loader";
import MovieList from "../MovieList";
import NotFoundMovieItemPageContent from "../NotFoundMovieItemPageContent";
import NotFoundMoviePage from "../NotFoundMoviePage";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";
import { connect } from "react-redux";
import { fetchApiMovies } from "../actions";
import { moviesApiPrefix } from "../utils/api";
import useDocumentTitle from "./useDocumentTitle";

const Landing = ({ isEmpty, isError, isLoading, isSingleError, isSingleLoading, fetchApiMovies, clickedMovieId }) => {
  const history = useHistory();
  const match = useRouteMatch();

  let initialMovieId = match !== undefined ? (match.params.id ?? 0) : undefined;
  if (isNaN(parseInt(initialMovieId))) {
    initialMovieId = -1;
  }

  const notFoundMovie = initialMovieId < 0 || isSingleError;

  let initialSearchQuery = match !== undefined ? (match.params.query ?? "") : "";
  initialSearchQuery.trim();

  const [chosenMovieId, setChosenMovieId] = useState(initialMovieId ? moviesApiPrefix + initialMovieId : initialMovieId);

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [chosenSorting, setChosenSorting] = useState("popularity");
  const [chosenGenre, setChosenGenre] = useState("All");

  let emptySearchQuery = useRef(false);
  let alreadyChosenGenre = useRef(false);
  let actualChosenGenre = useRef(chosenGenre);

  const handleActualChosenGenre = useCallback(
    (genre) => {
      actualChosenGenre.current = genre;
    },
    [actualChosenGenre]
  );

  useEffect(() => {
    /*
    console.log(chosenGenre);
    console.log(actualChosenGenre.current);
    console.log(handledActualChosenGenre);
    if (!handledActualChosenGenre) {
      actualChosenGenre.current = chosenGenre;
    }
    */
    actualChosenGenre.current = chosenGenre;

    if (chosenGenre !== "All") {
      if (searchQuery === "") {
        alreadyChosenGenre.current = true;
      } else if (searchQuery !== "" && !alreadyChosenGenre.current) {
        emptySearchQuery.current = true;
      } else if (searchQuery !== "" && alreadyChosenGenre.current) {
        actualChosenGenre.current = "All";
        alreadyChosenGenre.current = false;
        //handledActualChosenGenre = false;
      }
    }

    if (!notFoundMovie) {
      fetchApiMovies(searchQuery, chosenSorting, actualChosenGenre.current, history);
    }
  }, [searchQuery, chosenSorting, chosenGenre, notFoundMovie]) // eslint-disable-line react-hooks/exhaustive-deps

  useDocumentTitle(chosenMovieId);

  return notFoundMovie ?
    <NotFoundMoviePage movieId={match !== undefined ? match.params.id : 0} /> :
    (
      <Wrapper>
        <PageLink href="/landing">
          <PageTextFirstPart>netflix</PageTextFirstPart>roulette
      </PageLink>

        <PageHeader
          chosenMovieId={chosenMovieId}
          handleChosenMovie={(movieId) => setChosenMovieId(movieId)}
          searchQuery={searchQuery}
          handleSearchQuery={(searchQuery) => setSearchQuery(searchQuery)}
          emptySearchQuery={emptySearchQuery}
          history={history}
        />
        {isError && <div>Error happened!</div>}
        {isLoading ? (
          <Loader />
        ) : (
            isEmpty ?
              <NotFoundMovieItemPageContent query={match !== undefined ? match.params.query : ""} /> :
              <>
                <div>{isError}</div>
                <MovieList
                  handleChosenMovie={(movieId) => setChosenMovieId(movieId)}
                  handleChosenSorting={(sorting) => setChosenSorting(sorting)}
                  chosenSorting={chosenSorting}
                  handleChosenGenre={(genre) => { setChosenGenre(genre); handleActualChosenGenre(genre); }}
                  chosenGenre={actualChosenGenre.current}
                />
              </>
          )
        }
        <PageFooter />
      </Wrapper>
    );
};

const mapStateToProps = (state) => {
  return {
    clickedMovieId: state.movie.clickedMovieId,
    isApiMoviesEmpty: state.apiMovies.isEmpty,
    isEmpty: state.apiMovies.isEmpty,
    isError: state.apiMovies.isError,
    isLoading: state.apiMovies.isLoading,
    isSingleError: state.movie.isError,
    isSingleLoading: state.movie.isLoading,
  };
};

export default connect(mapStateToProps, { fetchApiMovies })(Landing);
