import React from 'react'
import logo from '../assets/images/Ellion.png'
import RegistrationForm from '../components/Registration/RegistrationForm'

const Registration = () => {
    return (
        <div className=' p-5 grid grid-cols-1 md:grid-cols-8 gap-4'>
            <div className="hero min-h-screen bg-base-200 col-span-full md:col-start-2 md:col-span-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className='flex justify-center py-2'>
                            <img className='w-32 rounded-xl shadow-md' src={logo} alt='logo' />
                        </div>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Connect with your faimily, friends and others.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration