'use client'
import CRUDTable from '@/components/atoms/CRUDTable'
import { SkillData } from '@/types/option.types'
import React, { useEffect, useState } from 'react'
import { HiPencil } from 'react-icons/hi2'
import moment from 'moment'
import AddSkillPopup from './AddSkillPopup'
import { Tooltip } from '@chakra-ui/react'
import SkillActionButtons from './SkillActionButtons'
import { useRouter } from 'next/navigation'

type Props = {
	skills: SkillData[]
	count?: string
}

export default function SkillsPage(props: Props) {
	const { skills, count } = props;
	const [_skills, setSkills] = useState<SkillData[]>([])
	const [showAdd, setShowAdd] = useState(false)
	const [selectedSkill, setSelectedSkill] = useState(null)
	const router = useRouter()
	const [limit, setLimit] = useState<number | string | null>(null)

	const [queryURL, setQueryURL] = useState<string | null>(null)

	useEffect(() => {
		if (queryURL && limit) {
			router.push(`/manager/skills/${queryURL}&limit=${limit}`)
		} else if (limit && !queryURL) {
			router.push(`/manager/skills/?limit=${limit}`)
		}else if (queryURL && !limit) {
			router.push(`/manager/skills/${queryURL}`)
		}
	}, [queryURL, limit])


	useEffect(() => {
		setSkills(skills || [])
	}, [skills])

	return (
		<div>
			{showAdd && (
				<AddSkillPopup
					isOpen={showAdd}
					onClose={(newSkill, isUpdate) => {
						setSelectedSkill(null)
						setShowAdd(false)
						if (newSkill && !isUpdate) {
							setSkills([newSkill, ..._skills])
						} else if (newSkill && isUpdate) {
							let items = _skills
							let index = items.findIndex((x) => x._id === newSkill._id)
							items[index] = newSkill
							setSkills(items)
						}
					}}
					skillData={selectedSkill}
				/>
			)}
			<CRUDTable
				onLimitSelect={(limit) => setLimit(limit)}
				columns={[
					{ title: 'Name' },
					{ title: 'Slug' },
					{ title: 'Created' },
					{ title: 'Updated' },
				]}
				selectable
				crudActions={(rowData?: any) => {
					return (
						<>
							<Tooltip label="Edit Skill" placement="top" hasArrow>
								<button
									className="text-muted"
									onClick={() => {
										setSelectedSkill(rowData)
										setShowAdd(true)
									}}
								>
									<HiPencil size={17} />
								</button>
							</Tooltip>
						</>
					)
				}}
				rows={_skills.map((skill) => ({
					id: skill._id,
					image_url: skill.icon_url,
					data: skill,
					items: [
						{
							type: 'text',
							value: skill.name,
							style: { minWidth: '150px' },
							label: 'name',
						},
						{ type: 'text', value: skill.slug, label: 'slug' },
						{
							type: 'text',
							value: moment(skill.createdAt).fromNow(),
							style: { minWidth: '150px' },
							label: 'createdAt',
						},
						{
							type: 'text',
							value: moment(skill.updatedAt).fromNow(),
							style: { minWidth: '150px' },
							label: 'updatedAt',
						},
					],
				}))}
				actionButtons={
					<>
						<SkillActionButtons
							setShowAdd={setShowAdd}
							onQueryFilter={(query) => setQueryURL(query)}
						/>
					</>
				}
			></CRUDTable>
		</div>
	)
}

export const dynamic = 'force-dynamic'
