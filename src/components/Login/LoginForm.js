import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="card-body">
            <form>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className='pt-2 text-sm font-semibold text-neutral-700'>
                    Not have an account? <Link className=' text-primary hover:underline'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm