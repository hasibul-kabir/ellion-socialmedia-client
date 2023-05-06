import React from 'react'
import Layout from '../components/Layouts/Layout'

const EditProfile = () => {
    return (
        <Layout>
            <div className='mx-5 md:mx-10 flex justify-center items-center h-[100vh]'>
                <div className='p-5 w-full md:w-3/5 rounded-md bg-base-100'>
                    <h3 className='text-lg font-bold text-neutral-700 text-center'>Edit Profile</h3>

                    <form className='mt-3 flex flex-col gap-y-5 text-base text-neutral-700 font-semibold'>
                        <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5'>
                            <input className='px-3 py-2 w-full md:w-1/2 rounded-md border border-neutral-400 shadow-md focus:outline-none' type='text' />
                            <input className='px-3 py-2 w-full md:w-1/2 rounded-md border border-neutral-400 shadow-md focus:outline-none' type='text' />
                        </div>
                        <input className='px-3 py-2 w-full rounded-md border border-neutral-400 shadow-md focus:outline-none' type='email' />
                        <input className='px-3 py-2 w-full md:w-1/2 rounded-md border border-neutral-400 shadow-md focus:outline-none' type='text' />
                        <textarea className='px-3 py-2 w-full  rounded-md border border-neutral-400 shadow-md focus:outline-none' type='text' />

                        <div className='mt-2 p-3 rounded-md w-full bg-primary text-center text-normal text-base-100 font-bold hover:bg-base-300 hover:text-neutral-700 cursor-pointer'>Submit</div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default EditProfile