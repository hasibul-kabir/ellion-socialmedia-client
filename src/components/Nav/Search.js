import React, { useState } from 'react'
import { useSearchUserQuery } from '../../RTK/features/users/userApi';
import Skeleton from 'react-loading-skeleton';
import EachUser from '../Home/RightPart/EachUser';

const Search = () => {
    const [key, setKey] = useState('');
    const { isLoading, isError, error, data } = useSearchUserQuery(key);

    let content;
    if (isLoading) content = <li><Skeleton /></li>


    if (!isLoading && isError) content = <div className='p-5 text-center text-base text-error font-bold'>{error?.message}</div>

    if (!isLoading && !isError && !data.length) content = <div className='p-5 text-center text-base text-error font-bold'>No user found!</div>


    if (!isLoading && !isError && data.length) content = data.map((user, index) => <li> <EachUser key={index} user={user} /> </li>)
    return (
        <div className="form-control">
            <div className="dropdown dropdown-hover">
                <input
                    tabIndex={0}
                    type="text"
                    placeholder="Search by last name"
                    className="px-5 py-3 focus:outline-none rounded-xl w-11/12 md:w-full text-neutral-600 font-normal"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                {
                    key !== '' &&
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {content}

                    </ul>
                }
            </div>
        </div>
    )
}

export default Search