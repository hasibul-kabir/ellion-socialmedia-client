import React from 'react'
import { Link } from 'react-router-dom'
import { loginSchema } from '../../form-validations/loginValidation'
import { useFormik } from 'formik'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const { values, errors, handleSubmit, handleChange, handleBlur, touched, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log({ ...values });
            action.resetForm();
        }
    })
    return (
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="email"
                        className="input input-bordered"
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className='text-error text-xs py-1'>{errors.email}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <p className='text-error text-xs py-1'>{errors.password}</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className='pt-2 text-sm font-semibold text-neutral-700'>
                    Not have an account? <Link className=' text-primary hover:underline' to='/registration' >Register</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm