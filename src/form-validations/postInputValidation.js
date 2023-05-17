import * as Yup from 'yup';

export const postSchema = Yup.object({
    description: Yup.string().required('Please add post description')
})