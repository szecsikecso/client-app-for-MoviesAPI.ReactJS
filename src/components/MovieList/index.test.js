import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import MovieList from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("MovieList component", () => {
    test("it renders", async () => {
        const store = mockStore({
            apiMovies: {
                apiMovies: [],
            },
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <MovieList />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
