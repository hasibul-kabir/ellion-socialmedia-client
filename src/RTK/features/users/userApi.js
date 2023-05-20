import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ['User']
        }),
        getFriends: builder.query({
            query: (id) => `/users/${id}/friends`,
            providesTags: ['Friends']
        }),
        addRemoveFriend: builder.mutation({
            query: ({ id, friendId }) => ({
                url: `/users/${id}/${friendId}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['User', 'Friends']
        })
    })
})

export const { useGetUserQuery, useGetFriendsQuery, useAddRemoveFriendMutation } = userApi;