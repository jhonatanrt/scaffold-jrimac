import { FormikBag, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Store } from '../../store';
import { SAVE } from '../../store/goals/actions';
import UserForm from './Components/Form';


const Home = (props: any) => {
  const imaginaryUser = {
    email: '',
    username: '',
    imaginaryThingId: null,
  };
  const { state, dispatch } = React.useContext(Store);

  const handleSubmit = (params: any) => {
    dispatch({ type: SAVE, payload: params});
    props.history.push('/cotizador')
  }

  return (
    <div>
      <FormikUser user={imaginaryUser} handleSubmit={handleSubmit}/>
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
    username: Yup.string().required()
  }),

  handleSubmit: (values: any, formikBag: FormikBag<any, any>) => {
    const { handleSubmit } = formikBag.props
    handleSubmit(values)
    setTimeout(() => {
      formikBag.setSubmitting(false)
    }, 2000);
  },
})(UserForm);

export default Home;
