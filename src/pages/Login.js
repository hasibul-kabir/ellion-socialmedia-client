import React, { useEffect } from 'react'
import logo from '../assets/images/Ellion.png'
import LoginForm from '../components/Login/LoginForm'
import { useLoginMutation } from '../RTK/features/auth/authApi'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [login, { isLoading, isError, error, isSuccess, data }] = useLoginMutation();

    useEffect(() => {
        if (!isLoading && isError) {
            toast.error(error?.data?.message)
        }
        if (isSuccess && data) {
            navigate('/feed')
        }
    }, [isError, isLoading, isSuccess, data])

    return (
        <div className=' p-5 grid grid-cols-1 md:grid-cols-8 gap-4'>
            <div className="hero min-h-screen bg-base-200 col-span-full md:col-start-2 md:col-span-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className='flex justify-center py-2'>
                            <img className='w-32 rounded-xl shadow-md' src={logo} alt='logo' />
                        </div>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login & connect with your faimily, friends and others.</p>
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

                        <LoginForm login={login} isLoading={isLoading} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login