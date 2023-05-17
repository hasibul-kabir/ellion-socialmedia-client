import React from 'react'
import CommentsModal from './CommentsModal';

import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import EditPostModal from './EditPostModal';
import Skeleton from 'react-loading-skeleton';


const Post = ({ isLoading, post }) => {
    const { _id, user, description, picturePath, likes, comments, createdAt, updatedAt } = post || {};
    let date = new Date(createdAt).toDateString();

    return (
        <>
            <div className="bg-base-100 rounded-lg p-5">
                {/* author */}
                <div className="flex items-stretch justify-between">

                    <div className='flex items-center gap-x-3'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src={isLoading ? <Skeleton /> : post && user?.picturePath && `${process.env.REACT_APP_API_IMGPATH}/${user.picturePath}`} alt='avatar-img' />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{isLoading ? <Skeleton /> : post && `${user?.firstName} ${user?.lastName} `}</div>
                            <div className="text-sm opacity-50">{isLoading ? <Skeleton /> : post && date.slice(4)}</div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0}>
                            <BsThreeDots className='text-xl cursor-pointer' />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-200 rounded-md w-52">
                            <label className='p-2 rounded-md hover:bg-base-100 font-semibold text-neutral-700 cursor-pointer' htmlFor='editpost-modal' >Edit Post</label>
                            <label className='p-2 rounded-md hover:bg-base-100 font-semibold text-neutral-700 cursor-pointer' >Delete Post</label>
                        </ul>
                    </div>

                </div>
                {/* author */}

                {/* post-content */}
                <div className=' py-2 w-full divide-y-2'>
                    <p className='font-normal'>{isLoading ? <Skeleton count={3} /> : post && description}</p>
                </div>
                {
                    picturePath &&
                    <div>
                        <img className='rounded-md' src={`${process.env.REACT_APP_API_IMGPATH}/${picturePath}`} alt='image' />
                    </div>
                }
                {/* post-content */}

                {/* post reactions */}
                {
                    !isLoading && post &&
                    <div className='flex items-center gap-x-5 py-2 text-2xl'>
                        <div className='flex items-center'><AiTwotoneLike className='cursor-pointer' /><span className='text-base px-1'>{likes && likes.length}</span></div>
                        <div className='flex items-center'> <label htmlFor="comments-modal"><BiCommentDetail className='cursor-pointer' /></label><span className='text-base px-1'>{!isLoading && comments && comments.length}</span></div>
                    </div>
                }
                {/* post reactions */}

            </div>

            {/* modals */}
            <CommentsModal />
            <EditPostModal />
        </>
    )
}

export default Post