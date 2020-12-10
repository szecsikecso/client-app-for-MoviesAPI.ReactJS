import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import FindMovie from './index';
import { StyledSearchInput } from "../utils/styledItems";

configure({
    adapter: new Adapter()
});

describe("FindMovie component", () => {
    test("it renders with emptySearchQuery current false", () => {
        const tree = renderer
            .create(<FindMovie emptySearchQuery={{ current: false }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with emptySearchQuery current true", () => {
        const handleSearchQuery = jest.fn();
        const tree = renderer
            .create(<FindMovie
                emptySearchQuery={{ current: true }}
                handleSearchQuery={handleSearchQuery}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect(handleSearchQuery).toHaveBeenCalledTimes(1);
    });

    test("it renders with handling click behavior", () => {
        const mockPreventDefault = jest.fn();
        const props = {
            emptySearchQuery: {
                current: true,
            },
            handleSearchQuery: jest.fn(),
        }
        const component = shallow(
            <FindMovie {...props} />
        )

        expect(component.exists()).toBeTruthy();

        component.find(StyledSearchInput).simulate("change", { target: { value: "Test Input" } });
        component.find("form").simulate("submit", { preventDefault: mockPreventDefault });
    });

});
