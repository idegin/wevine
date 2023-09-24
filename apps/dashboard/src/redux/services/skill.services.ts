import { BACKEND_URL } from '@/utils/CONSTANTS'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const skillApi = createApi({
	reducerPath: 'skillApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BACKEND_URL + `/skill`,
		prepareHeaders: (headers) => {
			const token = Cookies.get('we_auth')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['Skill'],
	endpoints: (builder) => ({
		getAllSkills: builder.query<any, void>({
			query: () => ({
				url: `/all`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			providesTags: ['Skill'],
		}),
	}),
})

export const {
    useGetAllSkillsQuery
} = skillApi
