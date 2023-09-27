'use client'
import React, { useEffect } from 'react'
import { useGetAuthDependenciesQuery } from './redux/services/user.services'
import { useDispatch } from 'react-redux'
import { logout, setAuthState } from './redux/features/auth.slice'
import { setViewState } from './redux/features/view.slice'
import Cookies from 'js-cookie'

export default function MasterControl() {
	const dispatch = useDispatch()
	const {
		data: authDependencies,
		error,
		isLoading,
		refetch,
	} = useGetAuthDependenciesQuery()

	useEffect(() => {
		dispatch(setViewState({ app_loading: true }))
		const token = Cookies.get('we_auth')

		if (!token) {
			dispatch(logout())
			dispatch(setViewState({ app_loading: false }))
			return
		}

		//@ts-ignore
		if (error && error?.status === 401) {
			Cookies.remove('we_auth')
			dispatch(logout())
			window.location.reload()
			return
		}else if (error){
			refetch()
			return
		}

		if (!error && authDependencies) {
			const { user_info, user } = authDependencies
			dispatch(
				setAuthState({
					user_info,
					user,
				}),
			)
			dispatch(setViewState({ app_loading: false }))
		}

	}, [isLoading, error, authDependencies])

	return null
}
