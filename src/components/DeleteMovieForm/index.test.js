import React from 'react';
import renderer from 'react-test-renderer';
import { connect, Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk'
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Formik } from 'formik';

import DeleteMovieForm from './index';

configure({
    adapter: new Adapter()
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("DeleteMovieForm component", () => {
    test("it renders", async () => {
        const tree = renderer
            .create(
                <Provider store={mockStore({})}>
                    <DeleteMovieForm />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with onSubmit", () => {
        const props = {
            movieId: 123,
            onClose: jest.fn(),
            deleteApiMovie: jest.fn(),
        }

        const store = mockStore({});
        const ConnectedDeleteMovieForm = connect()(DeleteMovieForm);
        const component = shallow(
            <ConnectedDeleteMovieForm store={store} {...props} />
        ).dive({ context: { store } }).dive();

        component.find(Formik).simulate("submit");

        expect(props.onClose).toHaveBeenCalledTimes(1);
        //expect(props.deleteApiMovie).toHaveBeenCalledTimes(1);
        //expect(props.deleteApiMovie).toHaveBeenCalledWith(props.movieId);
    });

});
