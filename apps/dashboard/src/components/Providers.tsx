'use client'

import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'
import { extendTheme } from '@chakra-ui/react'
import { store } from '@/redux/store'
import { Next13ProgressBar } from 'next13-progressbar'

const colors = {
	theme: '#5BBB7B',
	theme_dark: '#1f7c43',
	theme_darker: '#1F4B3F',
	theme_light: '#84d19c',
	theme_lighter: '#F1FCFA',

	primary: '#5BBB7B',
}

export const theme = extendTheme({
	colors,
	config: {
		initialColorMode: 'light', // Set the initial color mode
	},
})

export default function Providers({ children }: any) {
	return (
		<>
			<ReduxProvider store={store}>
				<CacheProvider>
					<ChakraProvider theme={theme}>
						{children}
					<Next13ProgressBar
						height="4px"
						color="#5BBB7B"
						options={{ showSpinner: true }}
						showOnShallow
					/>
						</ChakraProvider>
				</CacheProvider>
			</ReduxProvider>
		</>
	)
}
