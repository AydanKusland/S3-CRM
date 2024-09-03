// ADMIN RIGHTS REQUIRED

import { UsersList } from '@/components/UsersList'
import Link from 'next/link'

export default function UsersPage() {
	return (
		<div className='p-4'>
			<UsersList />
			<Link
				href={'users/addUser'}
				className='block mt-8 text-center hover:translate-y-2 hover:scale-95 hover:text-red-500 transition'
			>
				Добавить мученика!
			</Link>
		</div>
	)
}
