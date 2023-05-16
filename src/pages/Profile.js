import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import FeedPosts from '../components/Home/feedPosts/FeedPosts'
import ProfileStatus from '../components/Profile/ProfileStatus'
import About from '../components/Profile/About'
import { useParams } from 'react-router-dom'
import { useGetUserQuery } from '../RTK/features/users/userApi'
import Error from '../components/error/Error'
import { useSelector } from 'react-redux'


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
                <FeedPosts />
            </div>
            <div className='hidden md:block'>
            </div>
        </div>
    if (!isLoading && isError) content = <Error errorMessage={error?.error ? error.error : error?.data?.message && error.data.message} />
    if (!isLoading && !isError && isSuccess) content = <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-1 md:gap-x-4'>
        <div className='hidden md:block'></div>
        <div className='hidden md:block col-span-2'>
            <About data={data} />
        </div>
        <div className='feed md:col-span-4 flex flex-col'>
            <ProfileStatus data={data} />
            {
                user?._id === data?._id &&
                <CreatePost data={data} />
            }
            <FeedPosts data={data} />
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