import React from 'react'
import Navbar from '../Nav/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout