import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import MovieHeader from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("MovieHeader component", () => {
    test("it renders", () => {
        const store = mockStore({
            movie: {
                movie: null,
            },
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <MovieHeader />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
