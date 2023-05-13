import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    //set data to localstorage
                    localStorage.setItem("auth",
                        JSON.stringify({
                            token: result.data.token,
                            user: result.data.user
                        })
                    )

                    //set data to redux
                    dispatch(userLoggedIn({
                        token: result.data.token,
                        user: result.data.user
                    }))
                } catch (error) {

                }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;