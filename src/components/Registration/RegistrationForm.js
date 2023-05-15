import React from 'react'
import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { useFormik } from 'formik'
import { signupSchema } from '../../form-validations/signupValidation'

const RegistrationForm = ({ register, isLoading }) => {

    const formData = new FormData();
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
        occupation: ''
    }

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone();


    const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (values) => {
            for (let value in values) {
                formData.append(value, values[value])
            }
            formData.append("picture", acceptedFiles[0])

            register(formData)
        }
    })


    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //     // console.log(acceptedFiles);
    // }, [])

    // console.log(acceptedFiles[0]);

    return (
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="first name"
                        className="input input-bordered"
                        id='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName && <p className='text-error text-xs py-1'>{errors.firstName}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="last name"
                        className="input input-bordered"
                        id='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName && <p className='text-error text-xs py-1'>{errors.lastName}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Occupation</span>
                    </label>
                    <input type="text"
                        placeholder="Enter your occupation"
                        className="input input-bordered"
                        id='occupation'
                        value={values.occupation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Enter your address"
                        className="input input-bordered py-2 max-h-24"
                        id='location'
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <section className={
                        isDragActive ? 'w-full rounded-md border-2 border-dashed border-primary text-center p-5'
                            :
                            'w-full rounded-md border border-dashed border-neutral-300 text-center p-5'
                    }>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>{acceptedFiles[0] ? acceptedFiles[0].path : "Drag 'n' drop some files here, or click to select files"}</p>
                        </div>
                    </section>
                </div>
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
                </div>
                <div className="form-control mt-6">
                    {
                        isLoading ?
                            <button className="btn btn-primary" disabled >Loading...</button>
                            :
                            <button className="btn btn-primary">Signup</button>
                    }
                </div>
                <div className='pt-2 text-sm font-semibold text-neutral-700'>
                    Already registered? <Link className=' text-primary hover:underline' to='/' >Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm