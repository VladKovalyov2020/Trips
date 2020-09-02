import React from 'react';

// Modules

import { withFormik, Field } from 'formik';
import * as Yup from 'yup';

// Components

import FieldLabel from '../../../components/FieldLabel';
import { Button } from '../../../components/Button';
import Input from '../../../components/Contact/EmailForm/Input';

// Styles

import './styles.scss';

// ----------------

const initialFormValues = {
  password: '',
  email: '',
};

// ----------------

function EmailForm(props) {
  const {} = props;

  const touched = false;
  const error = 'Error';

  return (
    <form className="login-form">
      <div className="login-form__fields-wrapper">
        <FieldLabel
          blockTitle
          subLabel="Required"
          label="Email"
          status={{ error: touched && !!error, des: error }}
        >
          <Input placeholder="Please enter email" type="text" />
        </FieldLabel>
      </div>

      <Button
        loading={false}
        type="submit"
        size="lg"
        variant="contained"
        color="brawn"
      >
        Send
      </Button>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: () => initialFormValues,

  validationSchema: Yup.object().shape({
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
  }),

  validateOnMount: true,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },

  validate: () => {
    const errors = {};

    return errors;
  },
})(EmailForm);
