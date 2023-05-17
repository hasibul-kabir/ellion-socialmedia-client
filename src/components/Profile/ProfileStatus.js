import React from 'react'
import Skeleton from 'react-loading-skeleton'


import { FaUserFriends } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import About from './About';
import { useSelector } from 'react-redux';

const ProfileStatus = ({ isLoading, data }) => {
    const { user } = useSelector((state) => state.auth);

    const { _id, firstName, lastName, email, occupation, location, picturePath, friends } = data || {};
    return (
        <div className="bg-base-100 rounded-md mb-5 px-4">
            <div className='text-center py-5'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={isLoading ? <Skeleton /> : data && picturePath && `${process.env.REACT_APP_API_IMGPATH}/${picturePath}`} alt='profile-image' />
                    </div>
                </div>
                <h5 className=' text-lg font-bold text-neutral-700'>{isLoading ? <Skeleton /> : data && `${firstName} ${lastName}`}</h5>
                <p className='text-xs text-neutral-600 font-medium'>{isLoading ? <Skeleton /> : data && friends?.length > 1 ? `${friends?.length} friends` : `${friends?.length} friend`}</p>

                {
                    //add|remove friend & message buttons
                    user._id !== _id &&
                    <div className='flex justify-center gap-x-4 items-center py-3 text-base font-semibold text-neutral-100'>
                        {/* <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                        <HiUserAdd />
                        <p>Add Friend</p>
                    </div> */}

                        {
                            isLoading ? <Skeleton /> :
                                data &&
                                <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                                    <FaUserFriends />
                                    <p>Friend</p>
                                </div>
                        }
                        {
                            isLoading ? <Skeleton /> :
                                data &&
                                <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                                    <AiOutlineMessage />
                                    <p>Send Message</p>
                                </div>
                        }

                    </div>

                }
            </div>

            <div className='md:hidden'>
                <About isLoading={isLoading} data={data} />
            </div>
        </div>
    )
}

export default ProfileStatus