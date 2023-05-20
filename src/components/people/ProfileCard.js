import React from 'react'
import { HiUserAdd } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useAddRemoveFriendMutation } from '../../RTK/features/users/userApi';
import { useSelector } from 'react-redux';

const ProfileCard = ({ userInfo }) => {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const { _id, firstName, lastName, picturePath, occupation, location } = userInfo || {};

    const [addRemoveFriend, { isLoading: addRemoveLoading, isError: isAddRemoveError, error: addRemoveError }] = useAddRemoveFriendMutation(); //add or remove connections dispatch

    //handle connect/add-remove friend
    const handleConnect = () => {
        addRemoveFriend({ id: user?._id, friendId: _id })
    }
    //

    //handle redirect to person's profile
    const handleRedirect = () => {
        navigate(`/profile/${_id}`)
    }
    //
    return (
        <div className=' p-8 md:p-3 h-fit col-span-full md:col-span-2 rounded-md shadow-md bg-[#FFFFFF]'>
            <img
                src={`${process.env.REACT_APP_API_IMGPATH}/${picturePath}`}
                className='w-full rounded-md h-60 cursor-pointer'
                alt='profile-image'
                onClick={handleRedirect}
            />
            <p className='pt-2 text-base text-neutral-700 font-bold cursor-pointer' onClick={handleRedirect}>{`${firstName} ${lastName}`}</p>
            <p className='text-xs text-neutral-500 font-semibold'>{occupation ? occupation : location}</p>
            <div
                className='w-full mt-2 p-2 rounded-md bg-primary text-basic flex justify-center items-center gap-x-2 cursor-pointer hover:bg-[#9388f0]'
                onClick={handleConnect}
            >
                <HiUserAdd />
                <p className='font-bold text-sm'>Connect</p>
            </div>
        </div>
    )
}

export default ProfileCard