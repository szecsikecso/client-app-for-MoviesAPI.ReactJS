
import { combineReducers } from "redux";

import apiMoviesReducer from "./apiMoviesReducer";
import apiMovieReducer from "./apiMovieReducer";

export default combineReducers({
  apiMovies: apiMoviesReducer,
  movie: apiMovieReducer,
});
