import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { userLoggedOut } from '../../RTK/features/auth/authSlice';
import Search from './Search';

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { _id, picturePath } = user || {};

    //logout
    const handleLogout = () => {
        dispatch(userLoggedOut());
        localStorage.removeItem("auth");
    }
    return (
        <div className="navbar bg-base-200 md:px-10 sticky top-0 z-50">
            <div className="flex-1 md:gap-5">
                <Link to='/feed' className="btn btn-ghost normal-case text-xl">Ellion</Link>

                <Search />

            </div>
            <div className="flex-none gap-2">
                <button className="btn btn-ghost btn-circle w-8 md:w-12">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 md:w-10 rounded-full">
                            <img src={`${process.env.REACT_APP_API_IMGPATH}/${picturePath}`} alt={picturePath} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" to={`/profile/${_id}`}>
                                Profile
                                {/* <span className="badge">New</span> */}
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Link onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar