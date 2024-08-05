'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from 'utils/userActions'

export const UsersList = () => {
	const { data: users } = useQuery({
		queryKey: ['users'],
		queryFn: () => getAllUsers()
	})

	console.log(users)

	const deleteRight = (e: React.MouseEvent) => {
		console.log('right deleted')
		// TODO delete rights
	}

	return (
		<div className='flex'>
			{users?.map(user => {
				return (
					<div key={user.id} className='border-2 mx-auto'>
						<h3 className='text-center'>{user.fullName}</h3>
						{/* Товарные направления */}
						<div className='border-2'>
							{user.tovarnoeNapravlenie.map(napravlenie => (
								<p key={napravlenie}>{napravlenie}</p>
							))}
						</div>
						{/* Права */}
						{/* Доступные права */}
						<div className='flex justify-around'>
							<div>
								<h3 className=''>Доступные права</h3>
								<div className='flex justify-around'>
									<div>
										{user.userRights.map(right => {
											return (
												<div key={right} className='flex gap-2'>
													<div>{right}</div>
													<button onClick={deleteRight}>delete</button>
												</div>
											)
										})}
									</div>
								</div>
							</div>
							{/* Не доступные права */}
							<div className='border-2'>
								<h3>Не доступные права</h3>
								<div>
									{/* Здесь будет список недоступных прав с возможностью их добавить */}
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}