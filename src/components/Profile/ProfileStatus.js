import React from 'react'
import avatar from '../../assets/images/profile1.jpg';


import { FaUserFriends } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';

const ProfileStatus = () => {
    return (
        <div className="bg-base-100 rounded-md mb-5 px-4">
            <div className='text-center py-5'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avatar} alt='profile-image' />
                    </div>
                </div>
                <h5 className=' text-lg font-bold text-neutral-700'>clark kent</h5>
                <p className='text-xs text-neutral-600 font-medium'>500 friends</p>

                <div className='flex justify-center gap-x-4 items-center py-3 text-base font-semibold text-neutral-100'>
                    {/* <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                        <HiUserAdd />
                        <p>Add Friend</p>
                    </div> */}
                    <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                        <FaUserFriends />
                        <p>Friend</p>
                    </div>

                    <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                        <AiOutlineMessage />
                        <p>Send Message</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileStatus