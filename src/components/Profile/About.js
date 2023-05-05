import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaUserEdit } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdWork } from 'react-icons/md'

const About = () => {
    return (
        <div className='px-3 py-2 w-full rounded-md bg-base-100 sticky top-[10%]'>
            <div className='py-3 flex justify-between items-center text-base text-neutral-800 font-bold'>
                <h4>About</h4>
                <div className="tooltip" data-tip="Edit"> <FaUserEdit className='cursor-pointer' /> </div>
            </div>

            <div className='flex items-center gap-x-2 py-2'>
                <MdWork />
                <p className='text-sm text-neutral-600'>Software Engineer</p>
            </div>
            <div className='flex items-center gap-x-2 py-2'>
                <HiLocationMarker />
                <p className='text-sm text-neutral-600'>Dhaka, Bangladesh.</p>
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