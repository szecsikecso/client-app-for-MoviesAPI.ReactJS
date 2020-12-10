import React from 'react';
import renderer from 'react-test-renderer';
import MovieFilterAndSort from './index';

describe("MovieFilterAndSort component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<MovieFilterAndSort />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
