import type { Metadata } from 'next'

import { metadata as meta } from 'variables'

import '../../public/assets/css/app.min.css'
import '../../public/assets/css/custom.min.css'
import '../../public/assets/css/icons.min.css'
import '../../public/assets/css/bootstrap.min.css'

import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
	title: meta.title + ' Manager',
	description: meta.description,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
