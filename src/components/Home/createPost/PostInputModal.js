import React from 'react'
import DropBox from './DropBox'

const PostInputModal = () => {
    return (
        <>
            <input type="checkbox" id="createpost-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    <label htmlFor="createpost-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">Create Post</h3>

                    <div className='pt-6'>
                        <form>
                            <textarea placeholder="What's on your mind?" className='w-full max-h-28 bg-base-300 p-5 rounded-xl focus:outline-none' />
                            <DropBox>
                                <input type="file" name="file_upload" className="hidden" />
                            </DropBox>
                            <div className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer'>Post</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostInputModal