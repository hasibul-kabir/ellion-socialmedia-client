import React, { useEffect, useState } from 'react'
import CommentsModal from './CommentsModal';

import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import EditPostModal from './EditPostModal';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation, useLikePostMutation } from '../../../RTK/features/posts/postApi';
import { toast } from 'react-toastify';


const Post = ({ isLoading, post }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const { user: currUser } = useSelector((state) => state?.auth);
    const { _id, user, description, picturePath, likes, comments, createdAt, updatedAt } = post || {}; //render post data

    let date = new Date(createdAt).toDateString();

    //redirect to user profile
    const handleRedirect = () => {
        navigate(`/profile/${user?._id}`)
    }
    //

    //Like|remove-Like post
    const [likePost, { isLoading: likeLoading, isError: likeError, isSuccess: likeSuccess, error: likeErr }] = useLikePostMutation()
    const handleLike = () => {
        likePost({ id: _id, userId: currUser._id })
    }
    //


    //delete post
    const [deletePost, { isLoading: deleting, isError, error, isSuccess, data }] = useDeletePostMutation();
    useEffect(() => {
        if (!deleting && isError) {
            toast.error(error?.data?.message)
            if (error?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
        if (isSuccess && data) {
            toast(data?.message)
        }
    }, [isError, deleting, isSuccess, data, error])
    //

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
                            <div className="font-bold cursor-pointer" onClick={handleRedirect} >{isLoading ? <Skeleton /> : post && `${user?.firstName} ${user?.lastName} `}</div>
                            <div className="text-sm opacity-50">{isLoading ? <Skeleton /> : post && date.slice(4)}</div>
                        </div>
                    </div>

                    {
                        currUser?._id === user?._id &&
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0}>
                                <BsThreeDots className='text-xl cursor-pointer' />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-200 rounded-md w-52">
                                <label className='p-2 rounded-md hover:bg-base-100 font-semibold text-neutral-700 cursor-pointer' onClick={() => setOpen(true)} >Edit Post</label>
                                {
                                    deleting ?
                                        <label className='p-2 rounded-md hover:bg-base-100 font-semibold text-neutral-700 cursor-pointer' >Deleting...</label>
                                        :
                                        <label className='p-2 rounded-md hover:bg-base-100 font-semibold text-neutral-700 cursor-pointer' onClick={() => deletePost(_id)} >Delete Post</label>
                                }
                            </ul>
                        </div>
                    }

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
                        <div className='flex items-center'>
                            {
                                likes[`${currUser?._id}`] === true ?
                                    <AiTwotoneLike className='cursor-pointer' onClick={handleLike} />
                                    :
                                    <AiOutlineLike className='cursor-pointer' onClick={handleLike} />
                            }
                            <span className='text-base px-1'>{likes && Object.keys(likes).length}</span>
                        </div>
                        <div className='flex items-center'> <label><BiCommentDetail className='cursor-pointer'
                            onClick={() => setCommentsOpen(true)}
                        />
                        </label>
                            <span className='text-base px-1'>{!isLoading && comments && comments.length}</span>
                        </div>
                    </div>
                }
                {/* post reactions */}

            </div>

            {/* modals */}
            <CommentsModal open={commentsOpen} setOpen={setCommentsOpen} id={_id} />
            <EditPostModal open={open} setOpen={setOpen} id={open && post?._id} />
        </>
    )
}

export default Post