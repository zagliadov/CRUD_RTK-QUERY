import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9001'
    }),
    endpoints: (build) => ({
        registration: build.mutation({
            query: (data) => ({
                url: '/api/auth/registration',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Auth', id: 'LIST' }]
        }),
        login: build.mutation({
            query: (data) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Auth', id: 'LIST' }]
        }),
        privat: build.mutation({
            query: (token) => ({
                url: '/api/auth/privat*',
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`
                }
            }),
            invalidatesTags: [{ type: 'Auth', id: 'LIST' }]
        })

        


    })
})

export const { 
    useRegistrationMutation,
    useLoginMutation,
    usePrivatMutation,
 } = authApi;