import React from 'react'
import Form from './subComponents/Form'
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = '  username must be required';
  } else if (values.username.length <6) {
    errors.username = 'invalid username must be at least 6 characters (alphnemuric)';
  }

  if (!values.password) {
    errors.password = ' password must be required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be  at least 8 characters ';
  }
  else if ((!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.?!])[a-zA-Z0-9.?!]+$/i.test(values.password))) {
    errors.password = 'alphnemuric with Capital letters and the other characters like .?!';
  }

  if (!values.email) {
    errors.email = 'Email must be required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.confirmedPassword)     errors.confirmedPassword = ' confirmedPassword must be required';
  else if(values.confirmedPassword != values.password)
     errors.confirmedPassword = "password must be same as confirmed password ."

  return errors;
};
export default function FormikHooks() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmedPassword:'',
      email: '',
},validate,
onSubmit: values => {
 console.log(values);
},
});
  return (
    <div className='hello'>
       <h3>
       Formik Hooks 😮‍💨
       </h3>
       <Form formik={formik}/>
    </div>
  )
}
