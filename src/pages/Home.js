import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import FeedPosts from '../components/Home/feedPosts/FeedPosts'
import Advertisement from '../components/Home/RightPart/Advertisement'
import Contacts from '../components/Home/RightPart/Contacts'
import Systems from '../components/Home/LeftPart/Systems'
import { useSelector } from 'react-redux'

const Home = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-4 grid-cols-1 md:gap-x-4'>
                <div className='hidden md:block'>
                    <Systems user={user} />
                </div>

                <div className='feed md:col-span-2 flex flex-col'>
                    <CreatePost user={user} />
                    <FeedPosts />
                </div>

                <div className='hidden md:block'>
                    <Advertisement />
                    <Contacts user={user} />
                </div>
            </div>
        </Layout>
    )
}

export default Home