import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import UseDocumentTitle from './useDocumentTitle';

configure({
    adapter: new Adapter()
});

//const defaultPart = "Netflix Roulette";

describe("useDocumentTitle component", () => {
    test("it renders with empty id", () => {
        const emptyId = 0;
        const emptyTitle = mount(<UseDocumentTitle title={emptyId} />);
        expect(emptyTitle.exists()).toBeTruthy();
        //expect(document.title).toEqual(defaultPart);
    });

    test("it renders with non-empty id", () => {
        const notEmptyId = 123;
        const notEmptyTitle = mount(<UseDocumentTitle title={notEmptyId} />);
        expect(notEmptyTitle.exists()).toBeTruthy();
        //expect(document.title).toEqual(defaultPart + " - " + notEmptyId);
    });

});
