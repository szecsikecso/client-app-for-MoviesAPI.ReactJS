import React from 'react';
import renderer from 'react-test-renderer';
import { connect, Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import MovieItem from './index';
import { convertGenreNames, convertRuntime, convertYear } from "../utils/helpers";
import { RatingIcon, RuntimeIcon } from "../utils/icons";
import {
    CardLabelTitle,
    CardLabelYear,
    CardDescription,
    StyledRating,
    StyledRuntime,
    StyledImg
} from "../utils/styledItemsForMovieItem.js";

configure({
    adapter: new Adapter()
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("MovieItem component", () => {
    test("it renders", () => {
        const movie = {
            id: 123,
            title: "Test Movie",
            vote_average: 10.0,
            release_date: "2021-01-01",
            poster_path: "www.google.hu",
        };
        const store = mockStore({
            movie: {
                id: 123,
            },
        });
        const tree = renderer
            .create(
                <Provider store={store}>
                    <MovieItem movie={movie} />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it handles click behaviors", () => {
        const props = {
            apiMovie: true,
            movie: {
                id: 123,
                runtime: 123,
                genres: ["Action", "Adventure", "Animation"],
                title: "Test Movie",
                poster_path: "www.google.hu",
                release_date: "2021-01-01",
                vote_average: 9.9,
            },
            handleChosenMovie: jest.fn(),
        }
        const store = mockStore({
            movie: {
                id: 123,
            },
        });
        const ConnectedMovieItem = connect()(MovieItem);
        const component = shallow(
            <ConnectedMovieItem store={store} {...props} />
        ).dive({ context: { store } }).dive().dive();

        expect(component.exists()).toBeTruthy();

        const runtimeString = JSON.stringify(component.find(StyledRuntime).props().children);
        expect(runtimeString).toEqual(JSON.stringify([
            <RuntimeIcon />,
            convertRuntime(props.movie.runtime)
        ]));

        const ratingString = JSON.stringify(component.find(StyledRating).props().children);
        expect(ratingString).toEqual(JSON.stringify([
            <RatingIcon />,
            props.movie.vote_average
        ]));

        expect(component.find(CardLabelTitle).props().children).toEqual(props.movie.title);
        expect(component.find(CardLabelYear).props().children).toEqual(convertYear(props.movie.release_date));
        expect(component.find(CardDescription).props().children).toEqual(convertGenreNames(props.movie.genres));

        expect(component.find(StyledImg).exists()).toBeTruthy();
        component.find(StyledImg).simulate("click", {});
    });

    test("it handles edge cases of movie data", () => {
        const props = {
            movie: {
                id: 123,
                details: {
                    runtime: 0,
                    genres: ["Action", "Adventure", "Animation"],
                },
                title: "Test Movie",
                release_date: "2021-01-01",
                vote_average: 0,
            },
            handleChosenMovie: jest.fn(),
        }
        const store = mockStore({
            movie: {
                id: 123,
            },
        });
        const ConnectedMovieItem = connect()(MovieItem);
        const component = shallow(
            <ConnectedMovieItem store={store} {...props} />
        ).dive({ context: { store } }).dive().dive();

        expect(component.exists()).toBeTruthy();
    });

    test("it handles edge cases of movie data 2", () => {
        const props = {
            apiMovie: false,
            movie: {
                id: 123,
                title: "Test Movie",
                release_date: "2021-01-01",
                vote_average: 0,
            },
            handleChosenMovie: jest.fn(),
        }
        const store = mockStore({
            movie: {
                id: 123,
            },
        });
        const ConnectedMovieItem = connect()(MovieItem);
        const component = shallow(
            <ConnectedMovieItem store={store} {...props} />
        ).dive({ context: { store } }).dive().dive();

        expect(component.exists()).toBeTruthy();
    });

});
