import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const FormikField = ({ label, requiredLabel, className, ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const [field, meta, helpers] = useField(props);
    const propsName = props.name ? props.name : '';
    const propsClass = className ? ' ' + className : '';
    const errorClass = meta.touched && meta.error ? ' is-invalid' : '';
    const inputClass = `form-control${propsClass}${errorClass}`;
    const isDateInput = props.type === 'date';
    const labelAttributes = isDateInput ? { className: propsClass, placeholder: props.placeholder } : null;
    const dateInputClass = isDateInput ? ' date-input-container' : '';
    const containerClass = `form-group${dateInputClass}`;

    return (
        <div className={containerClass}>
            <label htmlFor={propsName} {...labelAttributes}>
                {label}{requiredLabel ?
                    <span className="required-label">*</span> :
                    null
                }
            </label>
            <input className={inputClass} {...field} {...props} />
            <ErrorMessage name={propsName} component="div" className="invalid-feedback" />
        </div>
    );
};
