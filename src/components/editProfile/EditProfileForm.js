import React, { useEffect, useState } from 'react'
import { useEditProfileMutation } from '../../RTK/features/users/userApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const EditProfileForm = ({ data }) => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)
    const { _id, firstName: prevFirstName, lastName: prevLastName, location: prevLocation, occupation: prevOccupation } = data || {}; //data to edit

    const [editProfile, { isLoading, isError, error, isSuccess, data: updatedResponse }] = useEditProfileMutation(); //dispatch data to edit mutation

    const [firstName, setFirstName] = useState(prevFirstName);
    const [lastName, setLastName] = useState(prevLastName);
    const [occupation, setOccupation] = useState(prevOccupation);
    const [location, setLocation] = useState(prevLocation);


    //set update response
    useEffect(() => {
        if (!isLoading && isError) {
            toast.error(error?.data?.message)
            if (error?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
        if (!isLoading && !isError && isSuccess) {
            navigate(`/profile/${user?._id}`)
        }
    }, [isLoading, isError, error, isSuccess])


    const handleSubmit = (e) => {
        e.preventDefault();
        editProfile({
            id: user?._id,
            data: {
                _id,
                firstName,
                lastName,
                occupation,
                location
            }
        })
    }
    return (
        <form className='mt-3 flex flex-col gap-y-5 text-base text-neutral-700 font-semibold' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        required
                        className='px-3 py-2 w-full  rounded-md border border-neutral-400 shadow-sm focus:outline-none'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        required
                        className='px-3 py-2 w-full rounded-md border border-neutral-400 shadow-sm focus:outline-none'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Occupation</span>
                </label>
                <input
                    className='px-3 py-2 w-full md:w-1/2 rounded-md border border-neutral-400 shadow-sm focus:outline-none'
                    type='text'
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <textarea
                    className='px-3 py-2 w-full  rounded-md border border-neutral-400 shadow-sm focus:outline-none'
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            {
                isLoading ?
                    <button className='mt-2 p-3 rounded-md w-full bg-primary text-center text-normal text-base-100 font-bold hover:bg-base-300 hover:text-neutral-700 cursor-pointer' >Submit</button>
                    :
                    <button className='mt-2 p-3 rounded-md w-full bg-primary text-center text-normal text-base-100 font-bold hover:bg-base-300 hover:text-neutral-700 cursor-pointer' type='submit' >Submit</button>

            }
        </form>
    )
}

export default EditProfileForm