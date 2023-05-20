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
        getSinglePost: builder.query({
            query: (id) => `/posts/${id}`,
            providesTags: ['SelectedPost']
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}/update`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Post', 'SelectedPost']
        }),
        likePost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}/like`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Post']
        }),

        commentPost: builder.mutation({
            query: ({ id, data }) => ({
                url: `/posts/${id}/comment`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Post', 'SelectedPost']
        }),

        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}/delete`,
                method: "DELETE",
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useGetUserPostsQuery, useGetAllPostsQuery, useGetSinglePostQuery, useCreatePostMutation, useUpdatePostMutation, useLikePostMutation, useCommentPostMutation, useDeletePostMutation } = postApi;