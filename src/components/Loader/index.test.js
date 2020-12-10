import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

describe("Loader component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<Loader title="Loading Test" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
