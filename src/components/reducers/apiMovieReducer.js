import {
  FETCH_API_MOVIE_FAILED,
  FETCH_API_MOVIE_INITIATED,
  FETCH_API_MOVIE_SUCCEEDED,
  MOVIE_CLICKED,
} from "../types";

const INITIAL_STATE = {
  localMovie: null,
  movie: null,
  clickedMovieId: "",
  isError: false,
  isLoading: false,
};

const apiMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_API_MOVIE_INITIATED:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case FETCH_API_MOVIE_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case FETCH_API_MOVIE_SUCCEEDED:
      return {
        ...state,
        movie: action.payload,
        isError: false,
        isLoading: false,
      };

    case MOVIE_CLICKED:
      return {
        ...state,
        clickedMovieId: action.payload,
      };

    default:
      return state;
  }
};

export default apiMovieReducer;
