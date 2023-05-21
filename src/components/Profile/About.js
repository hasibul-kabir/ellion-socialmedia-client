import React from 'react'
import { FaUserEdit, FaUserFriends } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { HiLocationMarker } from 'react-icons/hi'
import { MdWork } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = ({ isLoading, data }) => {
    const { user } = useSelector((state) => state.auth);

    const { _id, occupation, location } = data || {};
    return (
        <div className='px-3 py-2 w-full rounded-md bg-base-100 sticky top-[10%]'>
            <div className='py-3 flex justify-between items-center text-base text-neutral-800 font-bold'>
                <h4>About</h4>
                {
                    user?._id === _id &&
                    <Link to={`/profile/${user?._id}/edit`} className="tooltip" data-tip="Edit profile" > <FaUserEdit className='cursor-pointer' /> </Link>
                }
            </div>

            <div className='flex items-center gap-x-2 py-2'>
                {
                    isLoading ?
                        <p className='text-sm w-full text-neutral-600'>{<Skeleton />}</p>
                        :
                        !isLoading && data &&
                        <>
                            <MdWork />
                            <p className='text-sm text-neutral-600'>{occupation}</p>
                        </>
                }
            </div>
            <div className='flex items-center gap-x-2 py-2'>
                {
                    isLoading ?
                        <p className='text-sm w-full text-neutral-600'>{<Skeleton />}</p> :
                        data &&
                        <>
                            <HiLocationMarker />
                            <p className='text-sm text-neutral-600'>{location}</p>
                        </>

                }

            </div>


            <h4 className='py-3 text-base text-neutral-700 font-bold'>Connections</h4>
            <Link to='/connections' className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                <div className="p-3 rounded-full bg-basic ">
                    <FaUserFriends />
                </div>
                <p className='text-sm text-neutral-800 font-semibold'>All Connections</p>
            </Link>
            <Link to='/people' className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                <div className="p-3 rounded-full bg-basic ">
                    <IoIosPeople />
                </div>
                <p className='text-sm text-neutral-800 font-semibold'>People</p>
            </Link>

        </div>
    )
}

export default About