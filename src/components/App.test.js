import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("App component", () => {
    test("it renders", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 0,
            },
            apiMovies: {
                apiMovies: [],
                isEmpty: false,
                isError: false,
                isLoading: false,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();        expect(tree).toMatchSnapshot();
    });

});
