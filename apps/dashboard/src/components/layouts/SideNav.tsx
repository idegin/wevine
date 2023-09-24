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
} from 'react-icons/hi2'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type Props = {}

export default function SideNav({}: Props) {
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
						<EachNav title="Overview" Icon={HiChartBar} active />
						<EachNav title="Gigs" Icon={HiBriefcase} />
						<EachNav title="Payments" Icon={HiWallet} />
						<EachNav title="Messages" Icon={HiChatBubbleOvalLeft} />
						<EachNav title="Notifications" Icon={HiMiniBell} />
					</EachNavSection>
					<EachNavSection title="Content">
						<EachNav title="Clients" Icon={HiBuildingStorefront} />
						<EachNav title="Job Titles" Icon={HiBookmark} />
						<EachNav title="Projects" Icon={HiDocumentText} />
						<EachNav title="Users" Icon={HiUsers} />
					</EachNavSection>
					<EachNavSection title="Management">
						<EachNav title="Project Requests" Icon={HiMegaphone} />
						<EachNav title="Invoice" Icon={HiNewspaper} />
						<EachNav title="Activity Logs" Icon={HiCircleStack} />
					</EachNavSection>
					{/* <EachNavSection title="Admins"></EachNavSection> */}
				</Flex>
				<Flex
					h="60px"
					alignItems={'center'}
					gap={3}
					px={'2'}
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
}: {
	active?: boolean
	title: string
	Icon: any
}) => {
	return (
		<Flex
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
