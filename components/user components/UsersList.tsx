import { UserType } from 'utils/types'
import { getAllUsers } from 'actions/userActions'
import User from './User'

export const UsersList = async () => {
	const users: UserType[] | null = await getAllUsers()

	if (!users) return <h1>{"Can't find any users!"}</h1>

	return (
		<div className='flex flex-wrap mx-3 justify-evenly gap-7'>
			{users.map((user: UserType) => {
				return <User key={user.fullName} user={user} />
			})}
		</div>
	)
}
