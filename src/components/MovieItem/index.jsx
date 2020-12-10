import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import OperateMovieOverlay from "../OperateMovieOverlay";
import AltPoster from "./posterplaceholder.jpg";
import { handleMovieClickAction } from "../actions";
import { moviesApiPrefix } from "../utils/api";
import { convertGenreNames, convertRuntime, convertYear } from "../utils/helpers";
import { RatingIcon, RuntimeIcon } from "../utils/icons";
import {
  CardContainer,
  CardImageContainer,
  CardLabel,
  CardLabelTitle,
  CardLabelYear,
  CardDescription,
  StyledRating,
  StyledRuntime,
  StyledImg
} from "../utils/styledItemsForMovieItem.js";

const MovieItem = (props, movieId) => {
  //const { path } = useRouteMatch();

  const { id, title, vote_average, release_date, poster_path } = props.movie;

  //const [movieClick, setMovieClick] = useState(0);

  /*
  useEffect(() => {
    handleMovieClickAction(movieClick)
  }, [movieClick]);
  */

  /*
  function handleMovieClick(id){
    setMovieClick(id);
  }
  */

  let genres = [];
  let runtime;
  if (props.movie.details) {
    genres = props.movie.details.genres
    runtime = props.movie.details.runtime;
  } else if (props.movie) {
    genres = props.movie.genres;
    runtime = props.movie.runtime;
  }

  let imageURL = "";
  if (props.apiMovie) {
    imageURL = poster_path;
  } else {
    imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;
  }

  const convertedGenreNames = convertGenreNames(genres);
  const convertedRuntime = convertRuntime(runtime);
  const convertedYear = convertYear(release_date);

  let renderRuntime;
  if (runtime !== 0) {
    renderRuntime = (
      <StyledRuntime>
        <RuntimeIcon />
        {convertedRuntime}
      </StyledRuntime>
    );
  }

  let renderRating;
  if (vote_average !== 0) {
    renderRating = (
      <StyledRating>
        <RatingIcon />
        {vote_average}
      </StyledRating>
    );
  }

  let renderEditDetails = '';
  if (props.local || props.apiMovie) {
    renderEditDetails = (
      <OperateMovieOverlay key={id} movie={props.movie} apiMovie={props.apiMovie} />
    );
  }

  const [movieClicked, setMovieClicked] = useState(false);

  const handleMovieClick = useCallback(
    () => {
      let movieIdPrefix = "";
      if (props.apiMovie) {
        movieIdPrefix = moviesApiPrefix;
      }
      props.handleChosenMovie(movieIdPrefix + id);
      setMovieClicked(true);
    },
    [props, id, setMovieClicked],
  );

  useEffect(() => {
    if (movieClicked) {
      handleMovieClickAction(movieId);
    }
  }, [movieId, movieClicked]);

  return (
    <CardContainer>
      <CardImageContainer>
        <StyledImg
          src={poster_path ? imageURL : AltPoster}
          onClick={handleMovieClick}
          alt={`${title} poster`}
        />
        {renderRuntime}
        {renderRating}
        {renderEditDetails}
      </CardImageContainer>
      <CardLabel>
        <CardLabelTitle>{title}</CardLabelTitle>
        <CardLabelYear>{convertedYear}</CardLabelYear>
      </CardLabel>
      <CardDescription>{convertedGenreNames}</CardDescription>
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    movieId: state.movie.id,
  };
};

export default connect(mapStateToProps, { handleMovieClickAction })(MovieItem);
