'use client'
import React from 'react'
import {
	HiChartBar,
	HiPower,
	HiWallet,
	HiBriefcase,
	HiChatBubbleOvalLeft,
	HiMiniBell,
	HiBuildingStorefront,
	HiUsers,
	HiDocumentText,
	HiBookmark,
	HiMegaphone,
	HiNewspaper,
	HiCircleStack,
	HiStar,
} from 'react-icons/hi2'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

type Props = {
	activePage: string
}

export default function SideNav({activePage}: Props) {

	const router = useRouter()

	return (
		<>
			<Flex
				flexDirection={'column'}
				id="scrollbar"
				className="h-100 simplebar-scrollable-y"
			>
				<Box mb={'20px'} p="4">
					<a href="index.html" className="logo logo-dark">
						<span className="logo-lg">
							{/* <img
												src="assets/images/logo-dark.png"
												alt=""
												height="17"
											/> */}
							<h1 className="text-white fw-bold">WeVine</h1>
						</span>
					</a>
				</Box>
				<Flex
					flexDirection={'column'}
					gap={'50px'}
					flex={1}
					overflowY={'scroll'}
					pb="10"
					px="4"
				>
					<EachNavSection title="Pages">
						<EachNav onClick={() => router.push('/')} title="Overview" Icon={HiChartBar} active={activePage === 'overview'} />
						<EachNav onClick={() => {}} title="Gigs" Icon={HiBriefcase} />
						<EachNav onClick={() => {}} title="Payments" Icon={HiWallet} />
						<EachNav onClick={() => {}} title="Messages" Icon={HiChatBubbleOvalLeft} />
						<EachNav onClick={() => {}} title="Notifications" Icon={HiMiniBell} />
					</EachNavSection>
					<EachNavSection title="Clients">
						<EachNav onClick={() => {}} title="Overview" Icon={HiChartBar} />
						<EachNav onClick={() => {}} title="Project" Icon={HiDocumentText} />
						<EachNav onClick={() => {}} title="Invoice" Icon={HiNewspaper} />
					</EachNavSection>
					<EachNavSection title="Content">
						<EachNav onClick={() => {}} title="Job Titles" Icon={HiBookmark} />
						<EachNav onClick={() => router.push('/manager/skills')} title="Skills" Icon={HiStar} active={activePage === 'skills'} />
						<EachNav onClick={() => router.push('/manager/users')} title="Users" Icon={HiUsers} active={activePage === 'users'} />
					</EachNavSection>
					<EachNavSection title="Management">
						<EachNav onClick={() => {}} title="Projects" Icon={HiDocumentText} />
						<EachNav onClick={() => {}} title="Clients" Icon={HiBuildingStorefront} />
						<EachNav onClick={() => {}} title="Project Requests" Icon={HiMegaphone} />
						<EachNav onClick={() => {}} title="Invoice" Icon={HiNewspaper} />
						<EachNav onClick={() => {}} title="Activity Logs" Icon={HiCircleStack} />
					</EachNavSection>
					{/* <EachNavSection title="Admins"></EachNavSection> */}
				</Flex>
				<Flex
					h="60px"
					alignItems={'center'}
					gap={3}
					px={'6'}
					justifyContent={'space-between'}
				>
					<Flex gap={3} alignItems={'center'} cursor={'pointer'}>
						<Avatar size="sm" />
						<Flex alignItems={'flex-start'} flexDirection={'column'}>
							<Text m="0">First Name</Text>
							<Text m="0" fontSize={'xs'}>
								First Name
							</Text>
						</Flex>
					</Flex>
					<Box _hover={{ color: 'theme' }} color={'white'} cursor={'pointer'}>
						<HiPower size={20} />
					</Box>
				</Flex>
			</Flex>
		</>
	)
}

const EachNav = ({
	active,
	title,
	Icon,
	onClick,
}: {
	active?: boolean
	title: string
	Icon: any
	onClick: () => void
}) => {
	return (
		<Flex
			onClick={onClick}
			_hover={{
				color: 'theme_darker',
				backgroundColor: 'theme_light',
				fontWeight: 'bold',
				shadow: 'md',
			}}
			alignItems={'center'}
			gap={3}
			background={active ? 'theme_light' : 'none'}
			rounded="md"
			p="2"
			color={active ? 'theme_darker' : 'none'}
			fontWeight={active ? 'bold' : 'normal'}
			cursor={'pointer'}
			shadow={active ? 'md' : 'none'}
		>
			<Icon size={20} />
			<Text fontSize={'md'} m={0}>
				{title}
			</Text>
		</Flex>
	)
}

const EachNavSection = ({
	children,
	title,
}: {
	children: any
	title: string
}) => {
	return (
		<Flex flexDirection={'column'}>
			<Text fontSize={'xs'} fontWeight={'light'} color="theme_light">
				{title}
			</Text>
			<Flex flexDirection={'column'} gap={4}>
				{children}
			</Flex>
		</Flex>
	)
}
