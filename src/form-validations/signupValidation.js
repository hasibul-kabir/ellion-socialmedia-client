import * as Yup from 'yup';

export const signupSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required('Please enter your first name'),
    lastName: Yup.string().min(2).max(20).required('Please enter your last name'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(8).required('Please enter your password')
})