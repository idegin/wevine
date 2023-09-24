'use client'
import { AppStore } from '@/types/store.types'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AppLoading() {
	const { app_loading } = useSelector((store: AppStore) => store.view)

	if (!app_loading) {
		return null
	}

	return (
		<Flex
			bg="white"
			position={'absolute'}
			top={0}
			bottom={0}
			right={0}
			left={0}
			zIndex={2000}
			justifyContent={'center'}
			alignItems={'center'}
			minH={'100vh'}
		>
			<Spinner color="theme" size={'lg'} />
		</Flex>
	)
}
