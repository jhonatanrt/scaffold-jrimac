import { withFormik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import * as Yup from 'yup';

import UserForm from './Components/Form';
import { Store } from '../../store';

const Cotizador = (props: any) => {

  const { state, dispatch } = React.useContext(Store)
  const { goal } = state

  return (
    <div>
      {JSON.stringify(goal)}
      <FormikUser/>
    </div>
  )
}

const FormikUser =  withFormik({
  mapPropsToValues: (props: any) => ({ 
    email: '',
    username: '',
    imaginaryThingId: ''
  }),
  
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    username: Yup.string().required('This man needs a ${path}').when('email', (email: any, schema: any) => {
      if (email === 'foobar@example.com') { 
        return schema.label('papidipupi').min(10);
      }
      return schema.label('babidibiba');
    }).test('is-zigzagging', '${path} is not zigzagging', (value: any) => value === 'zigzagging'),
  }),

  handleSubmit: (values: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  },
})(UserForm);

export default Cotizador;
