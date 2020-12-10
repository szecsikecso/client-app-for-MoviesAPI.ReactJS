import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundMoviePage from './index';

describe("NotFoundMoviePage component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<NotFoundMoviePage />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
