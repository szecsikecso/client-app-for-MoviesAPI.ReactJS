import React from 'react';
import renderer from 'react-test-renderer';
import DeleteMovie from './index';

describe("DeleteMovie component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<DeleteMovie />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
