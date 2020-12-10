import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './index';

describe("PageFooter component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<PageFooter />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
