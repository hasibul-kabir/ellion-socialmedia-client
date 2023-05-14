import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const loggedin = useAuth();

    return !loggedin ? children : <Navigate to='/feed' />
}

export default PublicRoute