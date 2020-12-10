import React from 'react';
import renderer from 'react-test-renderer';
import { GlobalStyle } from './styledGlobal';

describe("GlobalStyle component", () => {
    test("it renders", async () => {
        const tree = renderer
            .create(<GlobalStyle />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
