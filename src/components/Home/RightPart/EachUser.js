import React from 'react'

const EachUser = ({ user }) => {
    const { firstName, lastName, picturePath } = user || {};
    return (
        <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic'>
            <div className="avatar">
                <div className="w-8 rounded-full">
                    <img src={`${process.env.REACT_APP_API_IMGPATH}/${picturePath}`} alt={picturePath} />
                </div>
            </div>

            <p className='text-base text-neutral-800 font-semibold'>{`${firstName} ${lastName}`}</p>
        </div>
    )
}

export default EachUser