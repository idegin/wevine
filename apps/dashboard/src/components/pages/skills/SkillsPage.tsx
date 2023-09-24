import CRUDTable from '@/components/atoms/CRUDTable'
import React from 'react'
import { HiFunnel, HiOutlinePlus } from 'react-icons/hi2'

type Props = {}

export default function SkillsPage({}: Props) {
	return (
		<div>
			<CRUDTable
				columns={[{ title: 'Name' }, { title: 'Slug' }]}
				selectable
				rows={[
					{
						id: Math.random().toString(),
						image_url:
							'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
						items: [
							{ type: 'text', value: 'Angular' },
							{ type: 'text', value: 'angular-js' },
						],
					},
				]}

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
			>
				
			</CRUDTable>
		</div>
	)
}
