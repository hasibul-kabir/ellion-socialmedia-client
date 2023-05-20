import React from 'react'
import Layout from '../components/Layouts/Layout'
import ProfileCard from '../components/people/ProfileCard'

const People = () => {
    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-8 grid-cols-2 md:gap-x-4 min-h-screen'>
                <div className='py-5 col-span-full grid grid-cols-8 gap-5'>
                    <ProfileCard />
                </div>
            </div>
        </Layout>
    )
}

export default People