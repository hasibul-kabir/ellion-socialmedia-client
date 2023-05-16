import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMyPosts: builder.query({
            query: (userId) => `/${userId}/posts`
        })
    })
})

export const { useGetMyPostsQuery } = postApi;