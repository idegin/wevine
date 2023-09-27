import CRUDTable from '@/components/atoms/CRUDTable'
import React from 'react'
import {
	HiEnvelope,
	HiFunnel,
	HiMiniEye,
	HiOutlinePlus,
	HiPencil,
	HiTrash,
} from 'react-icons/hi2'
import { Tooltip } from '@chakra-ui/react'

type Props = {}

export default function UsersPage({}: Props) {
	return (
		<div>
			<CRUDTable
				columns={[
					{ title: 'First Name' },
					{ title: 'Last Name' },
					{ title: 'Email' },
					{ title: 'Status' },
				]}
				selectable
				rows={[
					{
						id: Math.random().toString(),
						image_url:
							'https://img.freepik.com/free-photo/headshot-attractive-young-dark-skinned-man-dressed-casually-looking-upwards_273609-9557.jpg',
						items: [
							{ type: 'text', value: 'Emeka' },
							{ type: 'text', value: 'Stanley' },
							{ type: 'text', value: 'Emyboy@mail.com' },
							{ type: 'badge', value: 'active' },
						],
					},
				]}
				crudActions={
					<div className="d-flex gap-4 text-muted">
						<Tooltip label="Edit User" placement="top" hasArrow>
							<button>
								<HiPencil size={15} />
							</button>
						</Tooltip>
						<Tooltip label="View Details" placement="top" hasArrow>
							<button>
								<HiMiniEye size={15} />
							</button>
						</Tooltip>
						<Tooltip label="Delete User" placement="top" hasArrow>
							<button>
								<HiTrash size={15} />
							</button>
						</Tooltip>
					</div>
				}
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
							className="btn btn-primary  border-0 add-btn d-flex align-items-center"
							data-bs-toggle="modal"
							id="create-btn"
							data-bs-target="#showModal"
						>
							<HiEnvelope className="align-bottom me-1" />
							Send Email
						</button>
						<button
							type="button"
							className="btn btn-success bg-theme add-btn d-flex align-items-center"
							data-bs-toggle="modal"
							id="create-btn"
							data-bs-target="#showModal"
						>
							<HiOutlinePlus className="align-bottom me-1" /> Invite User
						</button>
					</>
				}
			/>
		</div>
	)
}
