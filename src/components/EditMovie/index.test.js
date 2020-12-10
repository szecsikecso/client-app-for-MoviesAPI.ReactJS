import React from 'react';
import renderer from 'react-test-renderer';
import EditMovie from './index';

describe("EditMovie component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<EditMovie />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
