import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { useUpdateProfilePicMutation } from '../../RTK/features/users/userApi';
import { ToastContainer, toast } from 'react-toastify';

const UpdatePictureModal = ({ open, setOpen }) => {
    const { user } = useSelector((state) => state.auth);
    const [updateProfilePic, { isLoading, isError, error, isSuccess }] = useUpdateProfilePicMutation();
    const formData = new FormData();
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
            'image/png': ['.png']
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (acceptedFiles[0]) {
            formData.append("userId", user?._id)
            formData.append("picture", acceptedFiles[0])
            updateProfilePic(formData)
        }
    }

    //response activity
    useEffect(() => {
        if (!isLoading && isError) {
            toast.error(error?.data?.message)
            if (error?.status === "FETCH_ERROR") {
                toast.error("Network Error")
            }
        }
        if (isSuccess) {
            setOpen(false)
        }
    }, [isError, isLoading, isSuccess, error])

    return (
        <>
            <input checked={open} type="checkbox" id="createpost-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>✕</label>
                    <h3 className="text-lg text-center font-bold">Upload new photo</h3>

                    <div className='pt-6'>
                        <form onSubmit={handleSubmit}>
                            <section className={
                                isDragActive ? 'w-full rounded-md border-2 border-dashed border-primary text-center p-5'
                                    :
                                    'w-full rounded-md border border-dashed border-neutral-300 text-center p-5'
                            }>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>{acceptedFiles[0] ? acceptedFiles[0].path : "Drag 'n' drop some files here, or click to select files"}</p>
                                    <em>{!acceptedFiles[0] && "(Only *.jpeg and *.png images will be accepted)"}</em>
                                </div>
                            </section>

                            {
                                isLoading ?
                                    <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer'>Uploading...</button>
                                    :
                                    <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer' type='submit'>Upload</button>
                            }
                        </form>
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

export default UpdatePictureModal