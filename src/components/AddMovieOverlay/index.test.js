import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import AddMovieOverlay from './index';
import AddMovie from "../AddMovie";
import MovieForm from "../MovieForm";
import { CloseButton } from "../utils/styledItems";

configure({
    adapter: new Adapter()
});

describe("AddMovieOverlay component", () => {
    test("it renders", () => {
        const tree = renderer
            .create(<AddMovieOverlay />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with handling changes of open prop of Overlay", () => {
        const props = {
        }
        const component = shallow(
            <AddMovieOverlay {...props} />
        )

        expect(component.exists()).toBeTruthy();
        expect(component.find(AddMovie).exists()).toBeTruthy();

        expect(component.find("EmotionCssPropInternal").exists()).toBeTruthy();
        expect(component.find("EmotionCssPropInternal").at(0).props().closeOnEsc).toEqual(true);
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(AddMovie).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);

        component.find(CloseButton).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(AddMovie).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);

        component.find("EmotionCssPropInternal").at(0).simulate("close", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(AddMovie).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);

        component.find(MovieForm).simulate("close", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);
    });

});
