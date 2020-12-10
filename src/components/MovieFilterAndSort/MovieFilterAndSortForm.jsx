import React from 'react';
import { Formik, Field, Form } from 'formik';

import { ChooseIcon } from "../utils/icons";

const MovieFilterAndSortForm = ({ handleChosenSorting, chosenSorting }) => {

    const sortingOptions = {
        "popularity": "Popularity",
        "release_date": "Release date",
        "vote_average": "Rating",
        "revenue": "Revenue",
    }

    return (
        <Formik
        >
            {() => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="genre">Sort By</label>
                        <Field name="sorting" as="select" className="form-control" value={chosenSorting} onChange={
                            e => { handleChosenSorting(e.target.value) }
                        }>
                            {Object.keys(sortingOptions).map(
                                (optionId, optionIndex) =>
                                    <option value={optionId} key={optionId}>{sortingOptions[optionId]}</option>
                            )}
                        </Field>
                        <ChooseIcon />
                    </div>
                </Form>

            )}
        </Formik>
    );
};

export default MovieFilterAndSortForm;
