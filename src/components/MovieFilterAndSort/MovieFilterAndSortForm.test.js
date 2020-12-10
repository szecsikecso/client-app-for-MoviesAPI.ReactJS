import React from 'react';
import renderer from 'react-test-renderer';
import MovieFilterAndSortForm from './index';

describe("MovieFilterAndSortForm component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<MovieFilterAndSortForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
