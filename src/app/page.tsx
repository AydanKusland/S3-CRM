import { SignUpForm } from '@/components/ui/SignUpForm'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-around p-24'>
			<SignUpForm />
			<Link href='/inspections'>To the Dashboard</Link>
		</main>
	)
}
