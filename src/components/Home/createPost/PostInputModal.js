import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';
import { postSchema } from '../../../form-validations/postInputValidation';
import { useSelector } from 'react-redux';


const PostInputModal = ({ open, setOpen, isLoading, createPost, isSuccess: postCreated }) => {

    const { user } = useSelector((state) => state.auth);


    const formData = new FormData();
    const initialValues = {
        description: ''
    }
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone();

    const { values, errors, handleSubmit, handleChange, handleBlur, touched, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: postSchema,
        onSubmit: (values) => {
            for (let value in values) {
                formData.append(value, values[value])
            }
            formData.append("userId", user?._id)
            formData.append("picture", acceptedFiles[0])

            createPost(formData);
        }
    })

    //reset
    useEffect(() => {
        if (postCreated) {
            resetForm()
            acceptedFiles.length = 0
        }
    }, [postCreated])



    return (
        <>
            <input checked={open} type="checkbox" id="createpost-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative overflow-y-hidden">
                    {/* <label htmlFor="createpost-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>✕</label>
                    <h3 className="text-lg text-center font-bold">Create Post</h3>

                    <div className='pt-6'>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                placeholder="What's on your mind?"
                                className='w-full max-h-28 bg-base-300 p-5 rounded-xl focus:outline-none'
                                id='description'
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.description && touched.description && <p className='text-error text-xs py-1'>{errors.description}</p>}
                            <section className={
                                isDragActive ? 'w-full rounded-md border-2 border-dashed border-primary text-center p-5'
                                    :
                                    'w-full rounded-md border border-dashed border-neutral-300 text-center p-5'
                            }>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>{acceptedFiles[0] ? acceptedFiles[0].path : "Drag 'n' drop some files here, or click to select files"}</p>
                                </div>
                            </section>
                            {
                                isLoading ?
                                    <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer' >Posting...</button>
                                    :
                                    <button className='w-full mt-3 p-1 bg-primary rounded-lg text-center text-lg text-basic font-bold cursor-pointer' type='submit'>Post</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostInputModal