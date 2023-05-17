import React from 'react'

const Error = ({ errorMessage }) => {
    return (
        <div className='w-full h-screen rounded-md p-5 text-center text-2xl font-bold'>{errorMessage}</div>
    )
}

export default Error