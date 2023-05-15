import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import logo from '../assets/images/Ellion.png'
import RegistrationForm from '../components/Registration/RegistrationForm'
import { useRegisterMutation } from '../RTK/features/auth/authApi';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation();

    useEffect(() => {
        if (isError) {
            toast.error(error?.data?.message);
        }
        if (isSuccess) {
            navigate('/')
        }
    }, [isError, error, isSuccess, navigate])


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
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        <RegistrationForm register={register} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration