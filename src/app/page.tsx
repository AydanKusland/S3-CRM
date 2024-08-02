import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-around p-24'>
			<h1>Welcome!</h1>
			<h2>Go to the dashboard now!</h2>
			<Link href='/dashboard/inspections'>To the Dashboard</Link>
		</main>
	)
}
