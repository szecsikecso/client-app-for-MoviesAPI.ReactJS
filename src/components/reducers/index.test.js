import expect from 'expect';

//import * as Types from "../types";
import * as MovieReducer from "./apiMovieReducer";
import * as MoviesReducer from "./apiMoviesReducer";
import * as IndexReducer from "./index";

let defaultState = {}

describe("Index Reducer tests", () => {

    beforeEach(() => {
        defaultState = Object.assign(
            {},
            IndexReducer.default(undefined, { type: '', payload: '' })
        );
    });

    test("Combine Movie and Movies", () => {
        const moviesState = MoviesReducer.default(undefined, { type: '', payload: '' });
        const movieState = MovieReducer.default(undefined, { type: '', payload: '' });
        const combinedState = { apiMovies: moviesState, movie: movieState }

        expect(combinedState).toEqual(defaultState);
    });

});
