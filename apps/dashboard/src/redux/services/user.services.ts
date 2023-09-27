import { BACKEND_URL } from '@/utils/CONSTANTS'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BACKEND_URL + `/user`,
		prepareHeaders: (headers) => {
			const token = Cookies.get('we_auth')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getAuthDependencies: builder.query<any, void>({
			query: () => ({
				url: `/dependencies`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			providesTags: ['User'],
		}),
	}),
})

export const {
    useGetAuthDependenciesQuery
} = userApi
