import React from 'react'
import Layout from '../components/Layouts/Layout'
import CreatePost from '../components/Home/createPost/CreatePost'
import FeedPosts from '../components/Home/feedPosts/FeedPosts'

const Home = () => {
    return (
        <Layout>
            <div className='mx-5 md:mx-10 mt-5 grid md:grid-cols-4 grid-cols-1 md:gap-x-4'>
                <div className='hidden md:block'>

                    {/* <div className="card w-50 bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div> */}

                </div>

                <div className='feed col-span-2 flex flex-col'>
                    <CreatePost />
                    <FeedPosts />
                </div>

                <div className='hidden md:block'>

                    {/* <div className="card w-50 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </Layout>
    )
}

export default Home