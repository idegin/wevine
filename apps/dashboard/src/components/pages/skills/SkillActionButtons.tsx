import {
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Tooltip,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiFunnel, HiOutlinePlus } from 'react-icons/hi2'

type Props = {
	setShowAdd: (data: boolean) => void
	onQueryFilter?: (queryString: string) => void
}

export default function SkillActionButtons({
	setShowAdd,
	onQueryFilter,
}: Props) {
	const [sortBy, setSortBy] = useState('name') // Default sorting by name
	const [sortOrder, setSortOrder] = useState('asc') // Default sorting in ascending order
	const [autoClose, setAutoClose] = useState(false)

	const handleFilterChange = () => {
		setAutoClose(false)
		const queryString = `?sortBy=${sortBy}&sortOrder=${sortOrder}`
		if (onQueryFilter) {
			onQueryFilter(queryString)
		}
	}

	return (
		<>
			<Tooltip hasArrow label="Find New Icons" placement="top">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://svgporn.com/#search=react"
					type="button"
					className="btn text-info"
					data-bs-toggle="modal"
					id="create-btn"
					data-bs-target="#showModal"
				>
					Find Icons
				</a>
			</Tooltip>

			<Menu closeOnSelect={false} isOpen={autoClose}>
				<Tooltip hasArrow label="Filter Skills" placement="top">
					<MenuButton
						onClick={() => setAutoClose(!autoClose)}
						as={IconButton}
						aria-label="Options"
						icon={<HiFunnel />}
						variant="outline"
						className="btn btn-success bg-theme-lighter text-theme border-0 add-btn d-flex align-items-center"
					>
						Filter
					</MenuButton>
				</Tooltip>
				<MenuList>
					<MenuOptionGroup
						defaultValue="asc"
						title="Sort Order"
						type="radio"
						onChange={(value) => setSortOrder(String(value))}
					>
						<MenuItemOption value="asc">Ascending</MenuItemOption>
						<MenuItemOption value="desc">Descending</MenuItemOption>
					</MenuOptionGroup>
					<MenuOptionGroup
						defaultValue="name"
						title="Sort By"
						type="radio"
						onChange={(value) => setSortBy(String(value))}
					>
						<MenuItemOption value="name">Name</MenuItemOption>
						<MenuItemOption value="createdAt">Created Date</MenuItemOption>
					</MenuOptionGroup>
					<br />
					<Button
						w="full"
						bg="theme_lighter"
						color="theme_dark"
						_hover={{
							bg: 'theme',
							color: 'white',
						}}
						onClick={handleFilterChange}
					>
						Apply Filter
					</Button>
				</MenuList>
			</Menu>
			<Tooltip hasArrow label="Add A New Skill" placement="top">
				<button
					type="button"
					className="btn btn-success bg-theme add-btn d-flex align-items-center"
					id="create-btn"
					onClick={() => setShowAdd(true)}
				>
					<HiOutlinePlus className="align-bottom me-1" /> Add Skill
				</button>
			</Tooltip>
		</>
	)
}
