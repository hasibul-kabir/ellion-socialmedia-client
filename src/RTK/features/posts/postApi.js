import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserPosts: builder.query({
            query: (userId) => `/posts/${userId}/posts`
        }),
        getAllPosts: builder.query({
            query: () => `/posts`
        })
    })
})

export const { useGetUserPostsQuery, useGetAllPostsQuery } = postApi;