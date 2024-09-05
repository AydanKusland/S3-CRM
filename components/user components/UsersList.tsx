import { UserType } from 'utils/types'
import { getAllUsers } from 'actions/userActions'
import User from './User'

export const UsersList = async () => {
	const users: UserType[] | null = await getAllUsers()

	if (!users) return <h1>Can't find any users!</h1>

	return (
		<div className='grid gap-y-3 lg:grid-cols-2 xl:grid-cols-3 justify-evenly'>
			{users.map((user: UserType) => {
				return <User key={user.fullName} user={user} />
			})}
		</div>
	)
}
