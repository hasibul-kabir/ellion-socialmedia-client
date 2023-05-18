import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { postSchema } from '../../../form-validations/postInputValidation';
import { useGetSinglePostQuery, useUpdatePostMutation } from '../../../RTK/features/posts/postApi';
import Skeleton from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';

const EditPostModal = ({ open, setOpen, id }) => {
    const { isLoading, isError, data } = useGetSinglePostQuery(id);
    const [value, setValue] = useState("");
    const [updatePost, { isLoading: updating, isError: isUpdateError, error: updateError, isSuccess: updated, data: updatedData }] = useUpdatePostMutation();

    //set previous value
    useEffect(() => {
        setValue(data?.description)
    }, [data, setValue])
    //


    //update post
    useEffect(() => {
        if (!updating && isUpdateError) {
            toast.error(updateError?.data?.message)
            if (updateError?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }

        if (updated && updatedData) {
            setOpen(false)
            toast(updatedData?.message)
        }
    }, [updating, isUpdateError, updateError, updated, updatedData])

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost({ id: data?._id, data: { description: value } })
    }
    //

    let content;
    if (isLoading) content = <Skeleton />
    if (!isLoading && isError) content = <p>something wrong happened, you can't update now</p>
    if (!isLoading && !isError && data) content =
        (
            <form onSubmit={handleSubmit}>
                <textarea
                    required
                    placeholder="What's on your mind?"
                    className='w-full max-h-28 bg-base-300 p-5 rounded-xl focus:outline-none'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {
                    updating ?
                        <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer'>Updating...</button>
                        :
                        <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer' type='submit'>Update</button>
                }
            </form>
        )

    return (
        <>
            <input checked={open} type="checkbox" id="editpost-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>✕</label>
                    <h3 className="text-lg text-center font-bold">Edit Post</h3>

                    <div className='pt-6'>
                        {content}
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default EditPostModal