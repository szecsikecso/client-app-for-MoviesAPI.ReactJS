import expect from 'expect';

import * as Types from "../types";
import * as Reducer from "./apiMoviesReducer";

let defaultState = {}

describe("Movies Reducer tests", () => {

    beforeEach(() => {
        defaultState = Object.assign(
            {},
            Reducer.default(undefined, { type: '', payload: '' })
        );
    });

    test("FETCH_API_MOVIES_INITIATED", () => {
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIES_INITIATED });

        expect(state.isError).toEqual(false);
        expect(state.isLoading).toEqual(true);

        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("FETCH_API_MOVIES_FAILED", () => {
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIES_FAILED });

        expect(state.isError).toEqual(true);
        expect(state.isLoading).toEqual(false);

        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("FETCH_API_MOVIES_EMPTY", () => {
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIES_EMPTY });

        expect(state.isEmpty).toEqual(true);
        expect(state.isLoading).toEqual(false);

        state.isEmpty = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

    test("FETCH_API_MOVIES_SUCCEEDED", () => {
        const payload = [
            {title: "Test Movie 1"},
            {title: "Test Movie 2"},
            {title: "Test Movie 3"},
        ]
        const state = Reducer.default(undefined, { type: Types.FETCH_API_MOVIES_SUCCEEDED, payload: payload });

        expect(state.apiMovies).toEqual(payload);
        expect(state.isError).toEqual(false);
        expect(state.isLoading).toEqual(false);

        state.apiMovies = [];
        state.isError = false;
        state.isLoading = false;

        expect(state).toEqual(defaultState);
    });

});
