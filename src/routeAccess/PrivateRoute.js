import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const loggedin = useAuth();

    return loggedin ? children : <Navigate to='/' />
}

export default PrivateRoute