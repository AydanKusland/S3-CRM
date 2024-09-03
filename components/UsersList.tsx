import { UserType } from 'utils/types'
import { getAllUsers } from 'actions/userActions'
import Link from 'next/link'

export const UsersList = async () => {
	const users: UserType[] | null = await getAllUsers()

	const deleteRight = (e: React.MouseEvent) => {
		console.log('right deleted / User List')
		// TODO delete rights
	}

	return (
		<div className='grid'>
			{users?.map((user: UserType) => {
				return (
					<div
						key={user.fullName}
						className='border-2 mx-auto pt-2 text-center'
					>
						<h3 className='text-lg'>{user.fullName}</h3>
						<div className='flex gap-2'>
							{/* Товарные направления */}
							<div className='text-center p-3'>
								<h4 className='underline'>Товарные направления</h4>
								{user.TN.map(tn => (
									<Link
										href={`/settings/TN/${tn.number}`}
										key={tn.number}
										className='block'
									>
										{tn.name}
									</Link>
								))}
							</div>
							{/* Права */}
							<div className='justify-around p-3'>
								<h4 className='underline'>Права</h4>
								<div className='flex gap-2 justify-center'>
									{/* Доступные права */}
									<h3 className=''>Доступные права:</h3>
									<div className='flex justify-around'>
										<div>
											{user.userRights.map((right: string) => {
												return (
													<div key={right} className='flex gap-2'>
														<div>{right}</div>
														<button onClick={deleteRight}>delete</button>
													</div>
												)
											})}
										</div>
									</div>
									{/* Не доступные права */}
									<div className=''>
										<h3>Не доступные права:</h3>
										<div>
											{/* Здесь будет список недоступных прав с возможностью их добавить */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
