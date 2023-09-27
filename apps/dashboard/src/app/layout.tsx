import type { Metadata } from 'next'

import { metadata as meta } from 'variables'

import '../../public/assets/css/app.min.css'
import '../../public/assets/css/custom.min.css'
import '../../public/assets/css/icons.min.css'
import '../../public/assets/css/bootstrap.min.css'

import './globals.css'
import Providers from '@/components/Providers'
import AppLoading from '@/components/AppLoading'
import MasterControl from '@/MasterControl'

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/> */}
			</head>
			<body>
				<Providers>
					<AppLoading />
					<MasterControl />
					{children}
				</Providers>
			</body>
		</html>
	)
}
