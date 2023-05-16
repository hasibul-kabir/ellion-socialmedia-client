import React from 'react';
import avatar from "../../../assets/images/Profile_avatar.png";

import { BsFillImageFill } from 'react-icons/bs';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import PostInputModal from './PostInputModal';
import Skeleton from 'react-loading-skeleton';

const CreatePost = ({ isLoading, data }) => {
    const { _id, email, picturePath } = data || {};
    return (
        <>
            <div className="bg-base-100 rounded-md mb-5 px-4">
                <div className="flex gap-x-4 py-5 items-center">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={isLoading ? <Skeleton /> : picturePath ? `${process.env.REACT_APP_API_IMGPATH}/${picturePath}` : avatar} alt='avatar' />
                        </div>
                    </div>
                    <label htmlFor="createpost-modal" className='w-full'>
                        <div className=" bg-basic rounded-full px-5 py-3 text-md font-normal cursor-pointer hover:bg-base-300">What's on your maind?</div>
                    </label>
                </div>

                <div className='flex justify-evenly pb-4'>
                    <label htmlFor="createpost-modal">
                        <div className='flex items-center gap-x-2 font-medium cursor-pointer'><BsFillImageFill /><p className='text-neutral-600'>Image</p></div>
                    </label>
                    <div className='flex items-center gap-x-2 font-medium'><BsFillCameraVideoFill /><p className='text-neutral-600'>Video</p></div>
                </div>
            </div>
            <PostInputModal />
        </>
    )
}

export default CreatePost