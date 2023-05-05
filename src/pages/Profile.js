import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import FeedPosts from '../components/Home/feedPosts/FeedPosts'
import ProfileStatus from '../components/Profile/ProfileStatus'
import About from '../components/Profile/About'


const Profile = () => {
    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-1 md:gap-x-4'>
                <div className='hidden md:block'></div>

                <div className='hidden md:block col-span-2'>
                    <About />
                </div>

                <div className='feed col-span-4 flex flex-col'>
                    <ProfileStatus />
                    <CreatePost />
                    <FeedPosts />
                </div>

                <div className='hidden md:block'>

                </div>
            </div>
        </Layout>
    )
}

export default Profile