import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserPosts: builder.query({
            query: (userId) => `/posts/${userId}/posts`,
            providesTags: ['Post']
        }),
        getAllPosts: builder.query({
            query: () => `/posts`,
            providesTags: ['Post']
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}/delete`,
                method: "DELETE"
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useGetUserPostsQuery, useGetAllPostsQuery, useCreatePostMutation, useDeletePostMutation } = postApi;