import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),
        getFriends: builder.query({
            query: (id) => `/users/${id}/friends`
        })
    })
})

export const { useGetUserQuery, useGetFriendsQuery } = userApi;