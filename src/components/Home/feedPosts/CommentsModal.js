import React from 'react'
import Comment from './Comment'
import avatar from "../../../assets/images/profile.jpg"

import { BiSend } from 'react-icons/bi'

const CommentsModal = () => {
    return (
        <>
            <input type="checkbox" id="comments-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    <label htmlFor="comments-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Comments</h3>

                    <div className='pt-4'>
                        {/* show comments */}
                        <div className='max-h-96 overflow-y-scroll'>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>

                        {/* comment input */}
                        <div className='flex items-center gap-x-2 sticky bottom-0'>
                            <div className="avatar py-1">
                                <div className="w-8 h-8 rounded-full">
                                    <img src={avatar} alt="avatar" />
                                </div>
                            </div>
                            <form className='w-full'>
                                <input type="text" placeholder="Comment here" className=" bg-base-300 pl-5 py-2 pr-10 rounded w-full focus:outline-none" />
                                <BiSend className='absolute top-3 right-3' />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentsModal