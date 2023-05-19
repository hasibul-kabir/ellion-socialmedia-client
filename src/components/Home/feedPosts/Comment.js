import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useGetUserQuery } from '../../../RTK/features/users/userApi';
import { useNavigate } from 'react-router-dom';

const Comment = ({ comment }) => {
    const navigate = useNavigate();
    let userId = Object.keys(comment);
    const id = userId[0];

    const { isLoading, error, data } = useGetUserQuery(id);

    //redirect to profile
    const handleRedirect = () => {
        if (!isLoading && !error && data) {
            navigate(`/profile/${data?._id}`)
        }
    }

    return (
        <div className='flex gap-x-2 py-2'>
            <div className="avatar py-1">
                <div className="w-8 h-8 rounded-full">
                    {
                        isLoading ?
                            <Skeleton />
                            :
                            data &&
                            <img src={`${process.env.REACT_APP_API_IMGPATH}/${data?.picturePath}`} alt="avatar" />
                    }
                </div>
            </div>
            <div className='bg-basic px-4 py-1 rounded-2xl'>
                <span className='text-sm font-bold text-neutral-600 cursor-pointer' onClick={handleRedirect}>{isLoading ? <Skeleton /> : !error && data && `${data.firstName} ${data.lastName}`}</span>
                <p className='text-sm font-medium'>{isLoading ? <Skeleton /> : comment && comment[id]}</p>
            </div>
        </div>
    )
}

export default Comment