import React from 'react'
import avatar from '../../../assets/images/profile.jpg'
import tiger from '../../../assets/images/bengal-tiger-ga09bd6249_1920.jpg'
import children from '../../../assets/images/ha-giang-ga80569397_1920.jpg'
import CommentsModal from './CommentsModal';

import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import EditPostModal from './EditPostModal';


const Post = () => {
    return (
        <>
            <div className="bg-base-100 rounded-lg p-5">
                {/* author */}
                <div className="flex items-stretch justify-between">

                    <div className='flex items-center gap-x-3'>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img src={avatar} alt='avatar-img' />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">May 1, 2023</div>
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
                    <p className='font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div>
                    <img className='rounded-md' src={tiger} alt='image' />
                </div>
                {/* post-content */}

                {/* post reactions */}
                <div className='flex items-center gap-x-5 py-2 text-2xl'>
                    <div className='flex items-center'><AiTwotoneLike className='cursor-pointer' /><span className='text-base px-1'>1</span></div>
                    <div className='flex items-center'> <label htmlFor="comments-modal"><BiCommentDetail className='cursor-pointer' /></label><span className='text-base px-1'>0</span></div>
                </div>
                {/* post reactions */}

            </div>

            {/* modals */}
            <CommentsModal />
            <EditPostModal />
        </>
    )
}

export default Post