import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaUserEdit } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdWork } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'

const About = ({ isLoading, data }) => {
    const { user } = useSelector((state) => state.auth);

    const { _id, firstName, lastName, email, occupation, location, picturePath, friends } = data || {};
    return (
        <div className='px-3 py-2 w-full rounded-md bg-base-100 sticky top-[10%]'>
            <div className='py-3 flex justify-between items-center text-base text-neutral-800 font-bold'>
                <h4>About</h4>
                {
                    user._id === _id &&
                    <div className="tooltip" data-tip="Edit"> <FaUserEdit className='cursor-pointer' /> </div>
                }
            </div>

            <div className='flex items-center gap-x-2 py-2'>
                {
                    isLoading ?
                        <Skeleton /> :
                        data &&
                        <>
                            <MdWork />
                            <p className='text-sm text-neutral-600'>{occupation}</p>
                        </>
                }
            </div>
            <div className='flex items-center gap-x-2 py-2'>
                {
                    isLoading ?
                        <Skeleton /> :
                        data &&
                        <>
                            <HiLocationMarker />
                            <p className='text-sm text-neutral-600'>{location}</p>
                        </>

                }

            </div>

            <h4 className='py-3 text-sm text-neutral-700 font-bold'>Social Links</h4>

            <div className='flex items-center gap-x-2 py-2'>
                <BsLinkedin />
                <p className='text-sm text-neutral-600'>myprofile</p>
            </div>
            <div className='flex items-center gap-x-2 py-2'>
                <BsGithub />
                <p className='text-sm text-neutral-600'>myprofile</p>
            </div>
        </div>
    )
}

export default About