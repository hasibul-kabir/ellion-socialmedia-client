import React from 'react'
import avatar from "../../../assets/images/profile.jpg"

const Comment = () => {
    return (
        <div className='flex gap-x-2 py-2'>
            <div className="avatar py-1">
                <div className="w-8 h-8 rounded-full">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
            <div className='bg-basic px-4 py-1 rounded-2xl'>
                <span className='text-sm font-bold text-neutral-600'>My Name</span>
                <p className='text-sm font-medium'>Test! This is a dummy comment. Have a nice day.</p>
            </div>
        </div>
    )
}

export default Comment