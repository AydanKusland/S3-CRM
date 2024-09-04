import UserComponent from '@/components/user components/User'
import { UserType } from 'utils/types'
import { getUser } from 'actions/userActions'

export default async function UserPage({
	params: { fullName }
}: {
	params: { fullName: string }
}) {
	const decodedFullName: string = decodeURI(fullName)
	const user: UserType | 'User not found' = await getUser(decodedFullName)

	if (user !== 'User not found')
		return (
			<div className='mt-8'>
				<UserComponent user={user} />
			</div>
		)
	return <h1>А был ли юзер?</h1>
}
