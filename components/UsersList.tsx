import { UserType } from 'utils/types'
import { getAllUsers } from 'actions/userActions'
import User from './user components/User'

export const UsersList = async () => {
	const users: UserType[] | null = await getAllUsers()

	if (!users) return <h1>Can't find any users!</h1>

	return (
		<div className='grid gap-4 lg:grid-cols-2'>
			{users.map((user: UserType) => {
				return <User key={user.fullName} user={user} />
			})}
		</div>
	)
}
