import React from 'react';
import renderer from 'react-test-renderer';
import { Form, Formik } from 'formik';
import { FormikField } from './initField';

describe("FormikField component", () => {
    test("it renders with more props", () => {
        const tree = renderer
            .create(
                <Formik>
                    <Form>
                        <FormikField
                            name="test"
                            type="text"
                            label="Test Field"
                            placeholder="Test Field Placeholder"
                            className="test-class"
                        />
                    </Form>
                </Formik>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("it renders with fewer props", () => {
        const tree = renderer
            .create(
                <Formik>
                    <Form>
                        <FormikField
                            name="test-2"
                            type="text"
                        />
                    </Form>
                </Formik>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
