import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import OperateMovieOverlay from './index';
import { CloseButton, ThreeDotButton, ThreeDotMenu } from "../utils/styledItems";

configure({
    adapter: new Adapter()
});

describe("OperateMovieOverlay component", () => {
    test("it renders", () => {
        const movie = {
            id: 123,
        };
        const tree = renderer
            .create(<OperateMovieOverlay movie={movie} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with handling changes of open prop of Overlay", () => {
        const props = {
            apiMovie: true,
            movie: {
                id: 123,
            },
        }
        const component = shallow(
            <OperateMovieOverlay {...props} />
        )

        expect(component.exists()).toBeTruthy();
        expect(component.find(ThreeDotButton).exists()).toBeTruthy();
        expect(component.find(ThreeDotMenu).exists()).toBeTruthy();

        expect(component.find(ThreeDotMenu).props().className).toEqual("display-none");

        component.find(ThreeDotButton).simulate("click", {});
        expect(component.find(ThreeDotMenu).props().className).toEqual("display-block");

        component.find(ThreeDotMenu).find(CloseButton).simulate("click", {});
        expect(component.find(ThreeDotMenu).props().className).toEqual("display-none");

        component.find(ThreeDotButton).simulate("click", {});
        expect(component.find(ThreeDotMenu).props().className).toEqual("display-block");
    });

    test("it renders with handling changes of open prop of Overlay for Edit", () => {
        const props = {
            apiMovie: true,
            movie: {
                id: 123,
            },
        }
        const component = shallow(
            <OperateMovieOverlay {...props} />
        )

        expect(component.exists()).toBeTruthy();
        expect(component.find(ThreeDotButton).exists()).toBeTruthy();
        expect(component.find(ThreeDotMenu).exists()).toBeTruthy();

        expect(component.find("EmotionCssPropInternal").at(0).exists()).toBeTruthy();
        expect(component.find("EmotionCssPropInternal").at(1).exists()).toBeTruthy();
        expect(component.find("EmotionCssPropInternal").at(2).exists()).toBeTruthy();

        expect(component.find("EmotionCssPropInternal").at(2).props().children).toEqual("Edit Movie");

        expect(component.find("EmotionCssPropInternal").at(0).props().closeOnEsc).toEqual(true);
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(0).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(0).find(CloseButton).at(0).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(0).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(0).simulate("close", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(0).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(0).find("Connect(MovieForm)").simulate("close");
        expect(component.find("EmotionCssPropInternal").at(0).props().open).toEqual(false);
    });

    test("it renders with handling changes of open prop of Overlay for Delete", () => {
        const props = {
            apiMovie: true,
            movie: {
                id: 123,
            },
        }
        const component = shallow(
            <OperateMovieOverlay {...props} />
        )

        expect(component.exists()).toBeTruthy();
        expect(component.find(ThreeDotButton).exists()).toBeTruthy();
        expect(component.find(ThreeDotMenu).exists()).toBeTruthy();

        expect(component.find("EmotionCssPropInternal").at(3).exists()).toBeTruthy();
        expect(component.find("EmotionCssPropInternal").at(4).exists()).toBeTruthy();
        expect(component.find("EmotionCssPropInternal").at(5).exists()).toBeTruthy();

        expect(component.find("EmotionCssPropInternal").at(5).props().children).toEqual("Delete Movie")

        expect(component.find("EmotionCssPropInternal").at(3).props().closeOnEsc).toEqual(true);
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(1).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(3).find(CloseButton).at(0).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(1).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(3).simulate("close", {});
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(false);

        component.find(ThreeDotMenu).find("button").at(1).simulate("click", {});
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(true);
        component.find("EmotionCssPropInternal").at(3).find("Connect(DeleteMovieForm)").simulate("close");
        expect(component.find("EmotionCssPropInternal").at(3).props().open).toEqual(false);
    });

});
