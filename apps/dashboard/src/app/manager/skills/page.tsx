import DefaultLayout from '@/components/layouts/DefaultLayout'
import SkillsPage from '@/components/pages/skills/SkillsPage'
import { APICall } from '@/utils/api.utils'
import React from 'react'

export default async function page() {
	const getAllSkills = async () => {
		try {
			const res = await APICall({
				route: '/skill/all',
				isAuth: true,
			})
			return res.data
		} catch (error) {
			throw new Error('Failed to fetch data')
			return Promise.resolve(error)
		}
	}

	let skills = await getAllSkills()

	return (
		<DefaultLayout title="Skills" name="skills">
			<SkillsPage skills={skills} />
		</DefaultLayout>
	)
}
