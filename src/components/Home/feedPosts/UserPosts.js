import React from 'react'
import Post from './Post'
import { useGetUserPostsQuery } from '../../../RTK/features/posts/postApi'
import Error from '../../error/Error';

const UserPosts = ({ userId }) => {
    const { isLoading, isError, error, isSuccess, data } = useGetUserPostsQuery(userId);

    let content;
    if (isLoading) content = <Post isLoading={isLoading} />
    if (!isLoading && isError) content = <Error errorMessage={error?.error ? error?.error : error?.data && error?.data?.message} />
    if (!isLoading && !isError && isSuccess && !data.length) content = <Error errorMessage={'No post here'} />
    if (!isLoading && !isError && isSuccess && data.length > 0) content = data.map((post) => <Post post={post} />)
    return (
        <div className='post flex flex-col gap-y-2'>
            {content}
        </div>
    )
}

export default UserPosts