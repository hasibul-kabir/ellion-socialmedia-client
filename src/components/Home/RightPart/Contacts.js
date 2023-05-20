import React from 'react'
import EachUser from './EachUser'
import { useGetFriendsQuery } from '../../../RTK/features/users/userApi';
import Skeleton from 'react-loading-skeleton';

const Contacts = ({ user }) => {
    const { _id } = user || {};
    const { isLoading, isError, error, data } = useGetFriendsQuery(_id);


    let content;
    if (isLoading) content = <Skeleton />
    if (!isLoading && isError) content = <div className='p-5 text-center text-base text-error font-bold'>{error?.error ? error?.error : error?.data && error?.data?.message}</div>
    if (!isLoading && !isError && !data.length) content = <div className='p-5 text-center text-base font-bold'>You have no connection!</div>
    if (!isLoading && !isError && data.length) content = data.map((user, index) => <EachUser key={index} user={user} />)
    return (
        <div className='w-full p-3 rounded-md bg-base-100 sticky top-[10%]'>
            <h5 className='text-sm font-bold text-neutral-600'>Connections</h5>
            <div className='my-2 max-h-[80vh] overflow-y-auto'>
                {content}
            </div>
        </div>
    )
}

export default Contacts