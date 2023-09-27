import type { Metadata } from 'next'

import { metadata as meta } from 'variables'

export const metadata: Metadata = {
	title: meta.title + ' Manager',
	description: meta.description,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div>{children}</div>
}
