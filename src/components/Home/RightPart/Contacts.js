import React from 'react'
import EachUser from './EachUser'

const Contacts = () => {
    return (
        <div className='w-full p-3 rounded-md bg-base-100 sticky top-[10%]'>
            <h5 className='text-sm font-bold text-neutral-600'>Contacts</h5>
            <div className='my-2 max-h-[80vh] overflow-y-auto'>
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
                <EachUser />
            </div>
        </div>
    )
}

export default Contacts