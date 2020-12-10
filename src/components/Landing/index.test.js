import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import Landing from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('react-router-dom', () => ({
    useHistory: jest.fn().mockReturnValue({
        pathname: "localhost:3000/example-path",

    }),
    useLocation: jest.fn().mockReturnValue({
        pathname: '/example-path',
        search: '',
        hash: '',
        state: null,
        key: 'asd123',
    }),
    useRouteMatch: jest.fn().mockReturnValue({
        isExact: true,
        path: "/example-path",
        url: "/example-path",
        params: {},
    }),
}));

describe("Landing component", () => {
    test("it renders", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 0,
            },
            apiMovies: {
                isEmpty: false,
                isError: false,
                isLoading: false,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with empty state", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 0,
            },
            apiMovies: {
                isEmpty: true,
                isError: false,
                isLoading: false,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing isEmpty={true} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with error", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 0,
            },
            apiMovies: {
                isEmpty: false,
                isError: true,
                isLoading: false,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing isError={true} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with loading", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 0,
            },
            apiMovies: {
                isEmpty: false,
                isError: false,
                isLoading: true,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing isLoading={true} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with non-zero clickedMovieId", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 123,
            },
            apiMovies: {
                isEmpty: false,
                isError: false,
                isLoading: false,
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing clickedMovieId={123} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with isSingleError", () => {
        const store = mockStore({
            movie: {
                clickedMovieId: 123,
            },
            apiMovies: {
                isEmpty: false,
                isError: false,
                isLoading: false,
                isSingleError: true
            }
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Landing clickedMovieId={123} isSingleError={true} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
