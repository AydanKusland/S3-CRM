import type { Metadata } from 'next'
import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'S3 CRM',
	description: 'Главное не переработать.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
