'use client'
import React, { useEffect } from 'react'
import { useGetAuthDependenciesQuery } from './redux/services/user.services'
import { useDispatch } from 'react-redux'
import { setAuthState } from './redux/features/auth.slice'
import { setViewState } from './redux/features/view.slice'
import Cookies from 'js-cookie'

export default function MasterControl() {
	const dispatch = useDispatch()
	const {
		data: authDependencies,
		error,
		isLoading,
	} = useGetAuthDependenciesQuery()

	useEffect(() => {
		const token = Cookies.get('we_auth')

		if (!token) {
			dispatch(setViewState({ app_loading: false }))
			return
		}

		dispatch(setViewState({ app_loading: true }))
		if (!isLoading && !error) {
			if (error) {
				dispatch(setViewState({ app_loading: true }))
			} else if (authDependencies) {
				const { user_info, user } = authDependencies
				dispatch(
					setAuthState({
						user_info,
						user,
					}),
				)
				dispatch(setViewState({ app_loading: false }))
			}
		} else {
			dispatch(setViewState({ app_loading: true }))
		}
	}, [isLoading, error, authDependencies])

	return null
}
