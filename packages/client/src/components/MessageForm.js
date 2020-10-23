import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const messageFormValidationSchema = yup.object({
  text: yup.string().min(1).max(512).required(),
});

function MessageForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={onSubmit}
      validationSchema={messageFormValidationSchema}
    >
      {() => (
        <Form>
          <Field name="text" />
          <ErrorMessage name="text" />
          <button type="submit">SEND MESSAGE</button>
        </Form>
      )}
    </Formik>
  );
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
