import React from 'react'
import Layout from '../components/Layouts/Layout'
import ProfileCard from '../components/people/ProfileCard'
import { useSelector } from 'react-redux'
import { useGetUserNotFriendsQuery } from '../RTK/features/users/userApi'
import Skeleton from 'react-loading-skeleton'
import Error from '../components/error/Error'

const People = () => {
    const { user } = useSelector((state) => state.auth)
    const { isLoading, isError, error, isSuccess, data } = useGetUserNotFriendsQuery(user?._id);

    const exceptFriendAndme = data?.filter(({ _id }) => _id !== user?._id)

    let content;
    if (isLoading) content = <Skeleton />
    if (!isLoading && isError) content = <Error errorMessage={error?.error ? error?.error : error?.data && error?.data?.message} />
    if (!isLoading && !isError && isSuccess && !data.length) content = <Error errorMessage={'No post here'} />
    if (!isLoading && !isError && isSuccess && data.length) content = exceptFriendAndme.map((user, index) => <ProfileCard key={index} user={user} />)
    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-2 md:gap-x-4 min-h-screen'>
                <div className='py-5 col-span-full grid grid-cols-8 gap-5'>
                    {content}
                </div>
            </div>
        </Layout>
    )
}

export default People