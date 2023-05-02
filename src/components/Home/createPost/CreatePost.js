import React from 'react';
import avatar from "../../../assets/images/profile.jpg"

import { BsFillImageFill } from 'react-icons/bs';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const CreatePost = () => {
    return (
        <div className="bg-base-100 rounded-md mb-5 px-4">
            <div className="flex gap-x-4 py-5">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>
                <div className="w-full bg-basic rounded-full px-5 py-3 text-md font-normal">What's on your maind?</div>
            </div>

            <div className='flex justify-evenly pb-4'>
                <div className='flex items-center gap-x-2 font-medium'><BsFillImageFill /><p className='text-neutral-600'>Image</p></div>
                <div className='flex items-center gap-x-2 font-medium'><BsFillCameraVideoFill /><p className='text-neutral-600'>Video</p></div>
            </div>
        </div>
    )
}

export default CreatePost