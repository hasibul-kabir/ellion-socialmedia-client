import React from 'react'
import { HiUserAdd } from 'react-icons/hi';
import avatar from '../../assets/images/profile.jpg'

const ProfileCard = () => {
    return (
        <div className='p-3 h-fit col-span-full md:col-span-2 rounded-md shadow-md bg-[#FFFFFF]'>
            <img src={avatar} className='w-full rounded-md' alt='' />
            <p className='pt-2 text-base text-neutral-700 font-bold'>my Name</p>
            <p className='text-xs text-neutral-500 font-semibold'>SWT. Engineer</p>
            <div className='w-full mt-2 p-2 rounded-md bg-primary text-basic flex justify-center items-center gap-x-2'>
                <HiUserAdd />
                <p className='font-bold text-sm'>Connect</p>
            </div>
        </div>
    )
}

export default ProfileCard