import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import MovieDetails from './index';

configure({
    adapter: new Adapter()
});

describe("MovieDetails component", () => {
    test("it renders", () => {
        const movie = {
            id: 123,
            runtime: "",
            genres: [],
            title: "Test Movie",
            vote_average: 10.0,
            release_date: "2021-01-01",
            poster_path: "www.google.hu",
        };
        const tree = renderer
            .create(<MovieDetails movie={movie} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it handles empty props", () => {
        const component = shallow(
            <MovieDetails />
        );

        expect(component.exists()).toBeTruthy()
    });

    test("it handles all props", () => {
        const props = {
            movie: {
                id: 123,
                runtime: 123,
                genres: ["Action", "Adventure", "Animation"],
                title: "Test Movie",
                poster_path: "https://www.google.hu",
                release_date: "2021-01-01",
                vote_average: 9.9,
            },
        }
        const component = shallow(
            <MovieDetails {...props} />
        );

        expect(component.exists()).toBeTruthy()
    });

    test("it handles props with edge cases", () => {
        const props = {
            movie: {
                id: 123,
                details: {
                    runtime: 123,
                    genres: [{name: "Action"}, {name: "Adventure"}, {name: "Animation"}],
                },
                title: "Test Movie",
                poster_path: "",
                release_date: "2021-01-01",
                vote_average: 9.9,
            },
        }
        const component = shallow(
            <MovieDetails {...props} />
        );

        expect(component.exists()).toBeTruthy();
    });

});
