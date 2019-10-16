import React, { useCallback, useEffect } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './Form';

const Cotizador = (props: any) => {
  const imaginaryUser = {
    email: '',
    username: '',
    imaginaryThingId: null,
  };

  return (
    <div>
      {/* <Form user={imaginaryUser}/> */}
      <FormikUser user={imaginaryUser}/>
    </div>
  )
}

const FormikUser =  withFormik({
  mapPropsToValues: (props: any) => ({ 
    email: props.user.email,
    username: props.user.username,
    imaginaryThingId: props.user.imaginaryThingId,
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
