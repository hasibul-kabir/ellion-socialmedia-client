import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import ProfileStatus from '../components/Profile/ProfileStatus'
import About from '../components/Profile/About'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../RTK/features/users/userApi'
import Error from '../components/error/Error'
import { useSelector } from 'react-redux'
import UserPosts from '../components/Home/feedPosts/UserPosts'


const Profile = () => {
    const { Id } = useParams();
    const { user } = useSelector((state) => state.auth);

    const { isLoading, isError, error, isSuccess, data } = useGetUserQuery(Id);

    let content;
    if (isLoading) content =
        <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-1 md:gap-x-4'>
            <div className='hidden md:block'></div>
            <div className='hidden md:block col-span-2'>
                <About isLoading={isLoading} />
            </div>
            <div className='feed md:col-span-4 flex flex-col'>
                <ProfileStatus isLoading={isLoading} />
                {
                    user?._id === data?._id &&
                    <CreatePost isLoading={isLoading} />
                }
                <UserPosts />
            </div>
            <div className='hidden md:block'>
            </div>
        </div>
    if (!isLoading && isError) content = <Error errorMessage={error?.error ? error.error : error?.data?.message && error?.data?.message === 'getaddrinfo ENOTFOUND ac-0vks9ft-shard-00-01.3ur0kba.mongodb.net' ? 'Internet Issue' : error?.data?.message} />

    if (!isLoading && !isError && isSuccess) content = <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-1 md:gap-x-4'>
        <div className='hidden md:block'></div>
        <div className='hidden md:block col-span-2'>
            <About data={data} />
        </div>
        <div className='feed md:col-span-4 flex flex-col'>
            <ProfileStatus data={data} />
            {
                user?._id === data?._id &&
                <CreatePost user={user} />
            }
            <UserPosts userId={data?._id} />
        </div>
        <div className='hidden md:block'>
        </div>
    </div>

    return (
        <Layout>
            {content}
        </Layout>
    )
}

export default Profile