import React from 'react'
import EachUser from '../RightPart/EachUser'

import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Systems = ({ user }) => {
    const { _id } = user || {};
    return (
        <div className='p-3 w-full rounded-md bg-base-100 sticky top-[10%]'>
            <Link to={`/profile/${_id}`}>
                <EachUser user={user} />
            </Link>

            <div className='mt-2 flex flex-col gap-y-1'>
                <Link to='/people' className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                    <div className="p-3 rounded-full bg-basic ">
                        <FaUserFriends />
                    </div>
                    <p className='text-base text-neutral-800 font-semibold'>People</p>
                </Link>

                <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                    <div className="p-3 rounded-full bg-basic ">
                        <AiOutlineFieldTime />
                    </div>
                    <p className='text-base text-neutral-800 font-semibold'>Memories</p>
                </div>
            </div>
        </div>
    )
}

export default Systems