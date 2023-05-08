import React from 'react'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'

const RegistrationForm = () => {
    return (
        <div className="card-body">
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="first name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="last name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Occupation</span>
                    </label>
                    <input type="text" placeholder="Enter your occupation" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <textarea type="text" placeholder="Enter your address" className="input input-bordered py-2 max-h-24" />
                </div>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <>
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <section className='w-full rounded-md border border-dashed border-neutral-300 text-center p-5'>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag & drop file here, or click to select file</p>
                                </div>
                            </section>
                        </>
                    )}
                </Dropzone>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className='pt-2 text-sm font-semibold text-neutral-700'>
                    Already registered? <Link className=' text-primary hover:underline' to='/' >Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm