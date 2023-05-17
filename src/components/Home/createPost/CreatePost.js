import React, { useEffect, useState } from 'react';

import { BsFillImageFill } from 'react-icons/bs';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import PostInputModal from './PostInputModal';
import Skeleton from 'react-loading-skeleton';
import { useCreatePostMutation } from '../../../RTK/features/posts/postApi';
import { ToastContainer, toast } from 'react-toastify';

const CreatePost = ({ isLoading, user }) => {
    const [open, setOpen] = useState(false)
    const { _id, email, picturePath } = user || {};

    const [createPost, { isLoading: posting, isError, error, isSuccess, data }] = useCreatePostMutation();

    useEffect(() => {
        if (!posting && isError) {
            toast.error(error?.data?.message)
            if (error?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
        if (isSuccess && data) {
            setOpen(false)
            toast(data?.message)
        }
    }, [isError, posting, isSuccess, data, error])

    return (
        <>
            <div className="bg-base-100 rounded-md mb-5 px-4">
                <div className="flex gap-x-4 py-5 items-center">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={isLoading ? <Skeleton /> : picturePath && `${process.env.REACT_APP_API_IMGPATH}/${picturePath}`} alt='avatar' />
                        </div>
                    </div>
                    <label onClick={() => setOpen(true)} className='w-full'>
                        <div className=" bg-basic rounded-full px-5 py-3 text-md font-normal cursor-pointer hover:bg-base-300">What's on your maind?</div>
                    </label>
                </div>

                <div className='flex justify-evenly pb-4'>
                    <label onClick={() => setOpen(true)}>
                        <div className='flex items-center gap-x-2 font-medium cursor-pointer'><BsFillImageFill /><p className='text-neutral-600'>Image</p></div>
                    </label>
                    <div className='flex items-center gap-x-2 font-medium'><BsFillCameraVideoFill /><p className='text-neutral-600'>Video</p></div>
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
            <PostInputModal open={open} setOpen={setOpen} isLoading={posting} createPost={createPost} />
        </>
    )
}

export default CreatePost