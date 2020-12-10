import React, { useCallback } from 'react';
import { connect } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { createApiMovie, updateApiMovie } from "../actions";
import { emptyValues, genreOptions } from "./initForm";
import { FormikField } from "./initField";

// eslint-disable-next-line no-unused-vars

const MovieForm = ({ movie, onClose, createApiMovie, updateApiMovie }) => {

    let edit = null;
    if (movie !== undefined) {
        //movie = movie;
        edit = true;
    } else {
        movie = emptyValues;
        edit = false;
    }

    const handleApiMovieCreate = useCallback(
        (values) => {
            createApiMovie(values);
        },
        [createApiMovie],
    );

    const handleApiMovieUpdate = useCallback(
        (movieId, values) => {
            updateApiMovie(movieId, values);
        },
        [updateApiMovie],
    );

    //let movieGenre = "Unknown";
    let movieGenres = ["Unknown"];
    if (movie.details) {
        //movieGenre = movie.details.genres[0].name
        movieGenres = movie.details.genres.map(({ name }) => {
            return name;
        });
    } else if (movie.genres) {
        //movieGenre = movie.genres[0];
        movieGenres = movie.genres;
    }

    return (
        <Formik
            initialValues={{
                id: movie.id || '',
                title: movie.title || '',
                tagline: movie.tagline || '',
                voteAverage: movie.vote_average || '',
                voteCount: movie.vote_count || '',
                releaseDate: movie.release_date || '',
                movieUrl: movie.poster_path || '',
                genre: movieGenres || [],
                overview: movie.overview || '',
                budget: movie.budget || '',
                revenue: movie.revenue || '',
                runtime: movie.runtime || '',
            }}
            //enableReinitialize={true}
            validationSchema={Yup.object().shape({
                title: Yup.string()
                    .required('Title is required'),
                tagline: Yup.string(),
                voteAverage: Yup.number()
                    .positive('Vote average should a positive number')
                    .max(10, 'Vote average should be less than or equal to 10'),
                voteCount: Yup.number()
                    .positive('Vote count should a positive number')
                    .integer('Vote count should an integer'),
                releaseDate: Yup.date(),
                //.required('Release date is required'),
                movieUrl: Yup.string()
                    .url('Movie URL should be a valid URL'),
                /*
                This regular check makes Edit page freezing after clicked into any input

                .matches(
                    regularURL,
                    'Enter correct url!'
                ),
                */
                genre: Yup.string()
                    .required('Select at least 1 genre')
                    .nullable(),
                //.min(1, 'Select at least 1 genre'),
                overview: Yup.string()
                    .required('Overview is required'),
                budget: Yup.number()
                    .positive('Budget should a positive number'),
                revenue: Yup.number()
                    .positive('Revenue should a positive number'),
                runtime: Yup.number()
                    .required('Runtime required')
                    .positive('Runtime should be a positive number')
                    .integer('Runtime should be an integer')
                    .max(5999999, 'Runtime should be less than or equal to 5 999 999'),
            })}
            onSubmit={values => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));

                if (!edit) {
                    handleApiMovieCreate(values);
                } else {
                    const movieId = movie.id;
                    handleApiMovieUpdate(movieId, values);
                }

                onClose();

            }}
        >
            {({ values, errors, touched, resetForm, setFieldValue }) => (
                <Form>
                    { values.id ?
                        <div className="form-group">
                            <label>Movie ID</label>
                            <div className="form-info">{values.id}</div>
                        </div>
                        : null
                    }
                    <FormikField name="title" type="text" label="Title" requiredLabel={true} placeholder="Title here" />
                    <FormikField name="tagline" type="text" label="Tagline" placeholder="Tagline here" />
                    <FormikField name="voteAverage" type="number" label="Vote average" placeholder="Vote average here" />
                    <FormikField name="voteCount" type="number" label="Vote count" placeholder="Vote count here" />
                    <FormikField name="releaseDate" type="date" label="Release date" requiredLabel={false} placeholder="Select date"
                        className={values.releaseDate !== "" ? 'has-value' : ''}
                    />
                    <FormikField name="movieUrl" type="text" label="Movie URL" requiredLabel={true} placeholder="Movie URL here" />
                    <div className="form-group">
                        <label htmlFor="genre">Genre<span className="required-label">*</span></label>
                        <Field name="genre" component="select" value={values.genre} multiple={true}
                            className={'form-control' + (errors.genre && touched.genre ? ' is-invalid' : '')}
                            onChange={e =>
                                setFieldValue("genre", [].slice.call(e.target.selectedOptions).map(option => option.value))
                            }
                        >
                            {Object.keys(genreOptions).map((optionId, optionIndex) =>
                                <option key={optionId} value={genreOptions[optionId]}>
                                    {genreOptions[optionId]}
                                </option>
                            )}
                        </Field>
                        <ErrorMessage name="genre" component="div" className="invalid-feedback" />
                    </div>
                    <FormikField name="overview" type="text" label="Overview" requiredLabel={true} placeholder="Overview here" />
                    <FormikField name="budget" type="number" label="Budget" placeholder="Budget here" />
                    <FormikField name="revenue" type="number" label="Revenue" placeholder="Revenue here" />
                    <FormikField name="runtime" type="text" label="Runtime" requiredLabel={true} placeholder="Runtime here" />
                    <div className="form-group form-buttons">
                        <button type="reset" className="btn btn-secondary"
                            onClick={() => {
                                if (window.confirm('Are you sure resetting the form?')) { resetForm() };
                            }}
                        >Reset</button>
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    </div>
                </Form>

            )}
        </Formik>
    );
};

export default connect(null, { createApiMovie, updateApiMovie })(MovieForm);
