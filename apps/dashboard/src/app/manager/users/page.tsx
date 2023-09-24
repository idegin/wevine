import DefaultLayout from '@/components/layouts/DefaultLayout'
import UsersPage from '@/components/pages/users/UsersPage'
import React from 'react'

export default function page() {
	return (
		<DefaultLayout title="Users" name="users">
			<UsersPage />
		</DefaultLayout>
	)
}
