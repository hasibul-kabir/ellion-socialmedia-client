import React from 'react'
import EachUser from '../RightPart/EachUser'

import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';

const Systems = ({ user }) => {
    return (
        <div className='p-3 w-full rounded-md bg-base-100 sticky top-[10%]'>
            <EachUser user={user} />

            <div className='mt-2 flex flex-col gap-y-1'>
                <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                    <div className="p-3 rounded-full bg-basic ">
                        <FaUserFriends />
                    </div>
                    <p className='text-base text-neutral-800 font-semibold'>Friends</p>
                </div>
                <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
                    <div className="p-3 rounded-full bg-basic ">
                        <MdGroups />
                    </div>
                    <p className='text-base text-neutral-800 font-semibold'>Groups</p>
                </div>
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