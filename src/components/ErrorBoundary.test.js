import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import ErrorBoundary from './ErrorBoundary';

configure({
    adapter: new Adapter()
});

describe("ErrorBounadary component", () => {
    test("it renders with state", () => {
        const mockState = { hasError: true, }
        const component = shallow(<ErrorBoundary />);
        component.setState({ ...mockState });

        const instance = component.instance();
        expect(instance.state).toEqual(mockState);
    });

    test("it renders with error", () => {
        console.error = jest.fn();

        const Something = () => null;
        const component = shallow(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );

        const error = new Error('test');
        component.find(Something).simulateError(error);
        
        expect(console.error).toHaveBeenCalledTimes(1);
    });

});
