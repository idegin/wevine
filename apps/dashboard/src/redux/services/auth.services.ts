import { BACKEND_URL } from '@/utils/CONSTANTS'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL + `/auth` }),
	tagTypes: ['Auth'],
	endpoints: (builder) => ({
		login: builder.mutation<any, any>({
			query: (body) => ({
				url: `/login`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
})

export const {
    useLoginMutation
} = authApi
