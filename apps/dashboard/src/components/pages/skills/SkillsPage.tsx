'use client'
import CRUDTable from '@/components/atoms/CRUDTable'
import { SkillData } from '@/types/option.types'
import React from 'react'
import { HiFunnel, HiOutlinePlus } from 'react-icons/hi2'
import moment from 'moment'

type Props = {
	skills: SkillData[]
}

export default function SkillsPage({ skills }: Props) {
	return (
		<div>
			<CRUDTable
				columns={[
					{ title: 'Name' },
					{ title: 'Slug' },
					{ title: 'Created' },
					{ title: 'Updated' },
				]}
				selectable
				rows={skills.map((skill) => ({
					id: skill.id,
					image_url: skill.icon_url,
					items: [
						{ type: 'text', value: skill.name, style: { minWidth: '150px' } },
						{ type: 'text', value: skill.slug },
						{
							type: 'text',
							value: moment(skill.createdAt).fromNow(),
							style: { minWidth: '150px' },
						},
						{
							type: 'text',
							value: moment(skill.updatedAt).fromNow(),
							style: { minWidth: '150px' },
						},
					],
				}))}
				actionButtons={
					<>
						<button
							type="button"
							className="btn btn-success bg-theme-lighter text-theme border-0 add-btn d-flex align-items-center"
							data-bs-toggle="modal"
							id="create-btn"
							data-bs-target="#showModal"
						>
							<HiFunnel className="align-bottom me-1" />
							Filter
						</button>
						<button
							type="button"
							className="btn btn-success bg-theme add-btn d-flex align-items-center"
							data-bs-toggle="modal"
							id="create-btn"
							data-bs-target="#showModal"
						>
							<HiOutlinePlus className="align-bottom me-1" /> Add Skill
						</button>
					</>
				}
			></CRUDTable>
		</div>
	)
}
