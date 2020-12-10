import React from 'react';
import renderer from 'react-test-renderer';
import AddMovie from './index';

describe("AddMovie component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<AddMovie />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
