import React from 'react';
import { Button } from '../../../components/Button';

const UserForm = (props: any) => {
  const {
    values,
    touched,
    errors,

    isSubmitting,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleReset,
    isValid
  } = props;

  return(
    <form className="" onSubmit={handleSubmit}>
      <h1>Hello this is form!</h1>
      <div className="form-group">
        <label>Imaginary Email</label>
        <input name="email" type="text" 
          className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
          value={values.email} 
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group">
        <label>Imaginary Username</label>
        <input name="username" type="text" 
          className={`form-control ${errors.username && touched.username && 'is-invalid'}`}
          value={values.username} 
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.username && touched.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>
      <Button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
        {isSubmitting ? 'WAIT PLIZ' : 'CLICK ME'}
      </Button>
    </form>
  );
}

export default UserForm;