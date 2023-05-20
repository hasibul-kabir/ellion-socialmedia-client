import React, { useEffect } from 'react'
import Layout from '../components/Layouts/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import EditProfileForm from '../components/editProfile/EditProfileForm';
import { useGetUserQuery } from '../RTK/features/users/userApi';
import Skeleton from 'react-loading-skeleton';
import Error from '../components/error/Error';

const EditProfile = () => {
    const navigate = useNavigate();
    const { Id } = useParams();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (Id !== user?._id) {
            navigate(`/profile/${user?._id}`)
        }
    }, [Id, user])

    const { isLoading, isError, error, data } = useGetUserQuery(user?._id);

    let content;
    if (Id === user?._id && isLoading) content = <Skeleton />
    if (Id === user?._id && !isLoading && isError) content = <Error errorMessage={error?.error ? error?.error : error?.data && error?.data?.message} />
    if (Id === user?._id && !isLoading && !isError && data) content = <EditProfileForm data={data} />


    return (
        <Layout>
            <div className='mx-5 md:mx-10 flex justify-center items-center h-[100vh]'>
                <div className='p-5 w-full md:w-3/5 rounded-md bg-base-100'>
                    <h3 className='text-lg font-bold text-neutral-700 text-center'> {isLoading ? <Skeleton /> : 'Edit Profile'}</h3>
                    {content}
                </div>
            </div>
        </Layout>
    )
}

export default EditProfile