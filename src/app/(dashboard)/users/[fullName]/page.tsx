import UserComponent from '@/components/User Components/User'
import { UserType } from 'utils/types'
import { getUser } from 'actions/userActions'
import DeleteUserButton from '@/components/User Components/DeleteUserButton'

export default async function UserPage({
	params: { fullName }
}: {
	params: { fullName: string }
}) {
	const decodedFullName: string = decodeURI(fullName)
	const user: UserType | 'User not found' = await getUser(decodedFullName)

	if (user !== 'User not found')
		return (
			<div className='grid h-full place-content-center'>
				<UserComponent user={user} />
				<DeleteUserButton fullName={user.fullName} />
			</div>
		)
	return (
		<div className='grid h-full place-content-center text-xl'>
			А был ли юзер?
		</div>
	)
}
