import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import avatar from "../../../assets/images/profile.jpg"

import { BiSend } from 'react-icons/bi'
import { useCommentPostMutation, useGetSinglePostQuery } from '../../../RTK/features/posts/postApi'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

const CommentsModal = ({ open, setOpen, id }) => {
    const { user } = useSelector((state) => state.auth)
    const [text, setText] = useState('');
    const { isLoading, isError, error, data } = useGetSinglePostQuery(id); //fetch post
    const [commentPost, { isLoading: commentPosting, isError: isCommentError, error: commentError, isSuccess: commentSuccess }] = useCommentPostMutation();


    //do comment
    const handleComment = (e) => {
        e.preventDefault();
        if (!isLoading && !isError && data && text !== '') {
            commentPost({
                id: data?._id,
                data: { userId: user?._id, comment: text }
            })
        }
    }

    useEffect(() => {
        if (!commentPosting && isCommentError) {
            toast.error(commentError?.data?.message)
            if (commentError?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
        if (!commentPosting && !isCommentError && commentSuccess) {
            setText('')
        }
    }, [commentPosting, isCommentError, commentError, commentSuccess])


    //


    //read comments
    let content;
    if (isLoading) content = <p className='p-2 w-1/2'> <Skeleton /></p>
    if (!isLoading && isError) content = <div className='p-5 text-center text-base text-error font-bold'>{error?.error ? error?.error : error?.data && error?.data?.message}</div>
    if (!isLoading && !isError && !data?.comments?.length) content = <div className='p-5 text-center text-base font-bold'>No comments here!</div>
    if (!isLoading && !isError && data?.comments?.length) content = data?.comments?.map((comment, index) => <Comment key={index} comment={comment} />)
    //
    return (
        <>
            <input checked={open} type="checkbox" id="comments-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>✕</label>
                    <h3 className="text-lg font-bold">Comments</h3>

                    <div className='pt-4'>
                        {/* show comments */}
                        <div className='max-h-96 overflow-y-auto'>
                            {content}
                        </div>

                        {/* comment input */}
                        <div className='flex items-center gap-x-2 sticky bottom-0'>
                            <div className="avatar py-1">
                                <div className="w-8 h-8 rounded-full">
                                    <img src={`${process.env.REACT_APP_API_IMGPATH}/${user.picturePath}`} alt="avatar" />
                                </div>
                            </div>
                            <form className='w-full' onSubmit={handleComment}>
                                <input
                                    required
                                    type="text"
                                    placeholder="Comment here"
                                    className=" bg-base-300 pl-5 py-2 pr-10 rounded w-full focus:outline-none"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <BiSend className='absolute top-3 right-3 cursor-pointer' onClick={handleComment} />
                            </form>
                        </div>

                    </div>
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

export default CommentsModal