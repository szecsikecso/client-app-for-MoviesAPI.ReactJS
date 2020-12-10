import React from 'react';
import renderer from 'react-test-renderer';
import SearchHeader from './index';

describe("SearchHeader component", () => {
    test("it renders with emptySearchQuery current false", () => {
        const tree = renderer
            .create(<SearchHeader emptySearchQuery={{ current: false }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with emptySearchQuery current true", () => {
        const handleSearchQuery = jest.fn();
        const tree = renderer
            .create(<SearchHeader
                emptySearchQuery={{ current: true }}
                handleSearchQuery={handleSearchQuery}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(handleSearchQuery).toHaveBeenCalledTimes(1);
    });

});
