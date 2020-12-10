import { Field, Form, Formik } from 'formik';
import React, { useCallback } from 'react';

import { connect } from "react-redux";
import { deleteApiMovie } from "../actions";

const DeleteMovieForm = ({ movieId, onClose, deleteApiMovie }) => {

    if (movieId === undefined) {
        movieId = 0;
    }

    const handleApiMovieDelete = useCallback(
        () => {
            onClose();
            deleteApiMovie(movieId);
        },
        [movieId, deleteApiMovie, onClose]
    );

    return (
        <Formik
            initialValues={{
                movieId: movieId,
            }}
            onSubmit={values => {
                handleApiMovieDelete();
            }}
        >
            {({ values, submitForm }) => (
                <Form>
                    <div className="form-description">
                        Are you sure you want to delete this movie?
                </div>
                    <Field name="movieId" type="hidden" value={values.movieId} className="form-control" />
                    <div className="form-group form-buttons">
                        <button type="submit" className="btn btn-primary mr-2" onClick={() => { submitForm() }}>
                            Confirm
                        </button>
                    </div>
                </Form>

            )}
        </Formik>
    );
};

export default connect(null, { deleteApiMovie })(DeleteMovieForm);
