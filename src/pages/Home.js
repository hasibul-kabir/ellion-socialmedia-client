import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import FeedPosts from '../components/Home/feedPosts/FeedPosts'
import Advertisement from '../components/Home/RightPart/Advertisement'
import Contacts from '../components/Home/RightPart/Contacts'

const Home = () => {
    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-4 grid-cols-1 md:gap-x-4'>
                <div className='hidden md:block'>

                </div>

                <div className='feed col-span-2 flex flex-col'>
                    <CreatePost />
                    <FeedPosts />
                </div>

                <div className='hidden md:block'>
                    {/* <div className='flex flex-col gap-y-5'> */}
                    <Advertisement />
                    <Contacts />
                    {/* </div> */}
                </div>
            </div>
        </Layout>
    )
}

export default Home