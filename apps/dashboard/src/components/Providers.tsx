'use client'

import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const colors = {
	theme: '#5BBB7B',
	theme_dark: '#1f7c43',
	theme_darker: '#1F4B3F',
	theme_light: '#84d19c',
	theme_lighter: '#F1FCFA',
}

export const theme = extendTheme({ colors })

export default function Providers({ children }: any) {
	return (
		<>
			<CacheProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</CacheProvider>
		</>
	)
}
