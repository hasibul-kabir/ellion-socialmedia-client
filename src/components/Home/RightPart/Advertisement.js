import React from 'react'
import image from '../../../assets/images/ha-giang-ga80569397_1920.jpg';

const Advertisement = () => {
    return (
        <div className='p-3 w-full rounded-md bg-base-100 mb-5'>
            <h5 className='font-bold text-sm'>Sponsored</h5>
            <div className='my-2'>
                <img className='w-full rounded-md' src={image} alt='ad-image' />
            </div>
            <div className='text-neutral-700'>
                <div className='flex justify-between items-center'>
                    <h6 className='text-base font-semibold'>Brand Name</h6>
                    <span className=' text-xs'>websitelink.com</span>
                </div>
                <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    )
}

export default Advertisement