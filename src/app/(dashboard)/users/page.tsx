// ADMIN RIGHTS REQUIRED

import { UsersList } from '@/components/user components/UsersList'
import Link from 'next/link'

export default function UsersPage() {
	return (
		<div className='grid h-full place-content-center'>
			<UsersList />
			<Link
				href={'users/addUser'}
				className='mt-6 text-center text-xl hover:translate-y-1 hover:scale-95 hover:text-red-500 transition'
			>
				Добавить мученика!
			</Link>
		</div>
	)
}
