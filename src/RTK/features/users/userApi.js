import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ['User']
        }),
        editProfile: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}/edit`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['User']
        }),
        getFriends: builder.query({
            query: (id) => `/users/${id}/friends`,
            providesTags: ['Friends']
        }),
        getUserNotFriends: builder.query({
            query: (id) => `/users/${id}/notfriends`,
            providesTags: ['NotFriend']
        }),
        addRemoveFriend: builder.mutation({
            query: ({ id, friendId }) => ({
                url: `/users/${id}/${friendId}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['User', 'Friends', 'NotFriend']
        }),
        searchUser: builder.query({
            query: (key) => `/users/search/${key}`
        })
    })
})

export const { useGetUserQuery, useEditProfileMutation, useGetFriendsQuery, useGetUserNotFriendsQuery, useAddRemoveFriendMutation, useSearchUserQuery } = userApi;