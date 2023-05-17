import React from 'react'
import { useNavigate } from 'react-router-dom';

const EachUser = ({ user }) => {
    const navigate = useNavigate();
    const { _id, firstName, lastName, picturePath } = user || {};

    const handleRedirect = () => {
        navigate(`/profile/${_id}`)
    }

    return (
        <div className='flex items-center gap-x-2 w-full rounded-md p-2 cursor-pointer hover:bg-basic' onClick={handleRedirect}>
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