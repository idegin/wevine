import DefaultLayout from '@/components/layouts/DefaultLayout'
import SkillsPage from '@/components/pages/skills/SkillsPage'
import React from 'react'

export default function page() {
	return (
		<DefaultLayout title="Skills" name="skills">
			<SkillsPage />
		</DefaultLayout>
	)
}
