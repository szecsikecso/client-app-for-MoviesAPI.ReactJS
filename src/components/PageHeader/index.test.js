import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'

import PageHeader from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("PageHeader component", () => {
    test("it renders with emptySearchQuery current false", () => {
        const tree = renderer
            .create(<PageHeader emptySearchQuery={{ current: false }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with emptySearchQuery current true", () => {
        const handleSearchQuery = jest.fn();
        const tree = renderer
            .create(<PageHeader
                emptySearchQuery={{ current: true }}
                handleSearchQuery={handleSearchQuery}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(handleSearchQuery).toHaveBeenCalledTimes(1);
    });

    test("it renders with emptySearchQuery current false and chosenMovieId", () => {
        const store = mockStore({
            movie: {
                movie: null,
            },
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <PageHeader
                        chosenMovieId={123}
                        emptySearchQuery={{ current: false }}
                    />
                </Provider>

            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
