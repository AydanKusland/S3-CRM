// ADMIN RIGHTS REQUIRED

import { UsersList } from '@/components/user components/UsersList'
import Link from 'next/link'

export default function UsersPage() {
	return (
		<div className='mt-8'>
			<UsersList />
			<Link
				href={'users/addUser'}
				className='block mt-5 text-center text-lg hover:translate-y-2 hover:scale-95 hover:text-red-500 transition'
			>
				Добавить мученика!
			</Link>
		</div>
	)
}
