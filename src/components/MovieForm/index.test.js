import React from 'react';
import renderer from 'react-test-renderer';
import { connect, Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Formik } from 'formik';

import MovieForm from './index';

configure({
    adapter: new Adapter()
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("MovieForm component", () => {
    beforeEach(() => {
        window.alert = jest.fn();
    });

    test("it renders with empty props", async () => {
        const tree = renderer
            .create(
                <Provider store={mockStore({})}>
                    <MovieForm />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with non-empty props", async () => {
        const tree = renderer
            .create(
                <Provider store={mockStore({})}>
                    <MovieForm movie={
                        {
                            id: 123,
                            title: "Test title",
                            tagline: "Test tagline",
                            vote_average: 10.0,
                            vote_count: 123,
                            release_date: "2021-01-01",
                            poster_path: "www.google.hu",
                            genres: ["Unknown"],
                            overview: "Test overview",
                            budget: 123,
                            revenue: 123,
                            runtime: 123,
                        }
                    } />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with empty props to simulate submit with empty object", async () => {
        const props = {
            createApiMovie: jest.fn(),
            updateApiMovie: jest.fn(),
            onClose: jest.fn(),
        }

        const store = mockStore({});
        const ConnectedMovieForm = connect()(MovieForm);
        const component = shallow(
            <ConnectedMovieForm store={store} {...props} />
        ).dive({ context: { store } }).dive();

        component.find(Formik).simulate("submit", {});

        expect(component.exists()).toBeTruthy();

        expect(props.onClose).toHaveBeenCalledTimes(1);
        //expect(props.createApiMovie).toHaveBeenCalledTimes(1);
    });

    test("it renders with non-empty props to simulate submit with empty object", async () => {
        console.error = jest.fn();
        const props = {
            createApiMovie: jest.fn(),
            updateApiMovie: jest.fn(),
            onClose: jest.fn(),
            movie: {
                id: 123,
                title: "Test title",
                tagline: "Test tagline",
                vote_average: 10.0,
                vote_count: 123,
                release_date: "2021-01-01",
                poster_path: "www.google.hu",
                genres: ["Unknown"],
                overview: "Test overview",
                budget: 123,
                revenue: 123,
                runtime: 123,
            },
        }

        const store = mockStore({});
        const ConnectedMovieForm = connect()(MovieForm);
        const component = shallow(
            <ConnectedMovieForm store={store} {...props} />
        ).dive({ context: { store } }).dive();

        component.find(Formik).simulate("submit", {});

        expect(component.exists()).toBeTruthy();

        expect(props.onClose).toHaveBeenCalledTimes(1);
        //expect(console.error).toHaveBeenCalledTimes(1);
        //expect(props.updateApiMovie).toHaveBeenCalledTimes(1);
    });

    test("it renders with empty props to check Formik component exists", async () => {
        const props = {
            createApiMovie: jest.fn(),
            updateApiMovie: jest.fn(),
            onClose: jest.fn(),
        }

        const store = mockStore({});
        const ConnectedMovieForm = connect()(MovieForm);
        const component = shallow(
            <ConnectedMovieForm store={store} {...props} />
        ).dive({ context: { store } }).dive();

        const formComponent = component.find(Formik).dive();

        expect(formComponent.exists()).toBeTruthy();
    });

});
