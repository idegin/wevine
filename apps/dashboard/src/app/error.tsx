'use client'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function error() {
	let retry = () => {
		window.location.reload()
	}

	return (
		<DefaultLayout name="error" title="error">
			<Flex h="90vh" justifyContent={'center'} alignItems={'center'}>
				<VStack gap={4}>
					<VStack gap={2}>
						<Text fontSize={'32px'}>Application Error</Text>
						<Text fontSize={'150px'} fontWeight={'bold'}>
							500
						</Text>
					</VStack>
					<Button bg="black" colorScheme='black' color={'white'} onClick={retry}>
						Reload
					</Button>
				</VStack>
			</Flex>
		</DefaultLayout>
	)
}
