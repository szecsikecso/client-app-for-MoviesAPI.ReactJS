import expect from 'expect';

import * as Types from "../types";
import * as Reducer from "./apiMovieReducer";

let defaultState = {}

describe("Movie Reducer tests", () => {

    beforeEach(() => {
        defaultState = Object.assign(
            {},
            Reducer.default(undefined, { type: '', payload: '' })
        );
    });

    test("FETCH_API_MOVIE_INITIATED", () => {
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIE_INITIATED });

        expect(state.isError).toEqual(false);
        expect(state.isLoading).toEqual(true);

        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("FETCH_API_MOVIE_FAILED", () => {
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIE_FAILED });

        expect(state.isError).toEqual(true);
        expect(state.isLoading).toEqual(false);

        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("FETCH_API_MOVIE_SUCCEEDED", () => {
        const payload = { title: "Test Movie" };
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIE_SUCCEEDED, payload: payload });

        expect(state.movie).toEqual(payload);
        expect(state.isError).toEqual(false);
        expect(state.isLoading).toEqual(false);

        state.movie = null;
        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("MOVIE_CLICKED", () => {
        const payload = 123;
        const state = Reducer.default(undefined, { type: Types.MOVIE_CLICKED, payload: payload });

        expect(state.clickedMovieId).toEqual(payload);

        state.clickedMovieId = "";

        expect(state).toEqual(defaultState);
    });

});
