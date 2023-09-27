import DefaultLayout from '@/components/layouts/DefaultLayout'
import SkillsPage from '@/components/pages/skills/SkillsPage'
import { APICall } from '@/utils/api.utils'
import React from 'react'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export default async function page({
	searchParams,
}: {
	searchParams: { sortOrder: string; limit: string; sortBy: string; q: string | null }
}) {
	let { sortBy, limit, sortOrder, q } = searchParams

	let searchQuery = q ? `&q=${q}`: ''

	let query = !sortBy
		? `?limit=${limit || 10}${searchQuery}`
		: `?sortBy=${sortBy}&sortOrder=${sortOrder}${searchQuery}&limit=${
				limit || 10
		  }`

	console.log('THE PARAMS --', {
		sortBy,
		limit,
		sortOrder,
	})
	console.log('THE QUERY --', query)

	const getAllSkills = async () => {
		try {
			const res = await APICall({
				route: `/skill/all${query ? query : ''}`,
				isAuth: true,
			})
			return res.data
		} catch (error) {
			throw new Error('Failed to fetch data')
		}
	}

	let skills = await getAllSkills()


	return (
		<DefaultLayout title="Skills" name="skills">
			<Suspense fallback={<p>Loading feed...</p>}>
				<SkillsPage skillListData={skills} count={limit} />
			</Suspense>
		</DefaultLayout>
	)
}
