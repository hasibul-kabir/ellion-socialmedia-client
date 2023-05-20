import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

import { HiUserAdd, HiUserRemove } from 'react-icons/hi';
import { ImSpinner } from 'react-icons/im';
import About from './About';
import { useSelector } from 'react-redux';
import { useAddRemoveFriendMutation, useGetUserQuery } from '../../RTK/features/users/userApi';
import { ToastContainer, toast } from 'react-toastify';

const ProfileStatus = ({ isLoading, data }) => {
    const { user } = useSelector((state) => state.auth);
    const { _id, firstName, lastName, email, occupation, location, picturePath, friends } = data || {}; //selected profile
    const { isLoading: userLoading, isError: userError, data: userData } = useGetUserQuery(user?._id); // my profile
    const [addRemoveFriend, { isLoading: addRemoveLoading, isError: isAddRemoveError, error: addRemoveError }] = useAddRemoveFriendMutation(); //add or remove connections dispatch

    // add or remove connections
    const handleAddRemoveFriend = () => {
        addRemoveFriend({ id: user?._id, friendId: _id })
    }

    useEffect(() => {
        if (!addRemoveLoading && isAddRemoveError) {
            toast.error(addRemoveError?.data?.message)
            if (addRemoveError?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
    })
    //

    return (
        <>
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
                        //add|remove friend buttons
                        user._id !== _id &&
                        <div className='flex justify-center gap-x-4 items-center py-3 text-base font-semibold text-neutral-100'>
                            {/* <div className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary'>
                        <HiUserAdd />
                        <p>Add Friend</p>
                    </div> */}

                            {
                                isLoading ? <Skeleton /> :
                                    data &&
                                        !userLoading && !userError && userData?.friends.includes(_id) ?
                                        <div
                                            className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary cursor-pointer'
                                            onClick={handleAddRemoveFriend}
                                        >
                                            <HiUserRemove />
                                            <p>Remove</p>

                                        </div>
                                        :
                                        <div
                                            className='flex gap-x-1 items-center px-3 py-2 rounded-md bg-primary cursor-pointer'
                                            onClick={handleAddRemoveFriend}
                                        >
                                            <HiUserAdd />
                                            <p>Connect</p>
                                        </div>
                            }
                        </div>
                    }
                </div>
                <div className='md:hidden'>
                    <About isLoading={isLoading} data={data} />
                </div>
            </div>

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
        </>
    )
}

export default ProfileStatus