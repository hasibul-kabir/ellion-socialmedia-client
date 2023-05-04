import React from 'react'
import avatar from "../../../assets/images/profile.jpg"

const EachUser = () => {
    return (
        <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
            <div className="avatar">
                <div className="w-7 rounded-full">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>

            <p className='text-base text-neutral-800 font-semibold'>User Name</p>
        </div>
    )
}

export default EachUser