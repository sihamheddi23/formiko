import React from 'react'

export default function Form({formik}) {
  return (
    <div >
        <form className='forms'>
          
          <div className="group">
                <label htmlFor="username">
                    username
                </label>
                <input type="text" name="username"         onBlur={formik.handleBlur}
   onChange={formik.handleChange} value={formik.values.username} placeholder='enter username' />
                {formik.touched.username && formik.errors.username ? (
                    <small className='error'>{formik.errors.username}</small>
                ) : null}
 
                
       
          </div>
          <div className="group">
                <label htmlFor="username">
                    email
                </label>
                <input type="email" name="email"          onBlur={formik.handleBlur}
  onChange={formik.handleChange} value={formik.values.email} placeholder='enter email' />
                {formik.touched.email && formik.errors.email ? (
                    <small className='error'>{formik.errors.email}</small>
                ) : null}
          </div>
          <div className="group">
                <label htmlFor="username">
                    password
                </label>

                <input type="password" name="password"          onBlur={formik.handleBlur}
  onChange={formik.handleChange} value={formik.values.password} placeholder='enter password' />
                {formik.touched.password && formik.errors.password ? (
                    <small className='error'>{formik.errors.password}</small>
                ) : null}
          </div>
          <div className="group">
                <label htmlFor="username">
                   Confirmed password
                </label>
                <input type="password" name="confirmedPassword"          onBlur={formik.handleBlur}
  onChange={formik.handleChange} value={formik.values.confirmedPassword} placeholder='enter the same password' />
                {formik.touched.confirmedPassword && formik.errors.confirmedPassword ? (
                    <small className='error'>{formik.errors.confirmedPassword}</small>
                ) : null}
          </div>
        </form>
    </div>
  )
}
