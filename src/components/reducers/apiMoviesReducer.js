import {
  FETCH_API_MOVIES_INITIATED,
  FETCH_API_MOVIES_FAILED,
  FETCH_API_MOVIES_EMPTY,
  FETCH_API_MOVIES_SUCCEEDED,
} from "../types";

const INITIAL_STATE = {
  apiMovies: [],
  isEmpty: false,
  isError: false,
  isLoading: false,
};

const apiMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_API_MOVIES_INITIATED:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case FETCH_API_MOVIES_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case FETCH_API_MOVIES_EMPTY:
      return {
        ...state,
        isEmpty: true,
        isLoading: false,
      };

    case FETCH_API_MOVIES_SUCCEEDED:
      return {
        ...state,
        apiMovies: action.payload,
        isError: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default apiMoviesReducer;
