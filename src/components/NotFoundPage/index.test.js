import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from './index';

describe("NotFoundPage component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<NotFoundPage location={{ path: "test-path" }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
