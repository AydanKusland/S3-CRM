import { UserType } from 'utils/types'
import Link from 'next/link'

export default function User({ user }: { user: UserType }) {
	const deleteRight = (e: React.MouseEvent) => {
		console.log('right deleted / User List')
		// TODO delete rights
	}

	return (
		<div className='rounded-t border-2 border-my-darkGreen max-w-screen-md p-3 text-center shadow-sm shadow-lime-700 hover:border-my-green hover:shadow-2xl transition-all'>
			<Link
				href={`/users/${user.fullName}`}
				className='block text-xl tracking-wider  my-2 hover:scale-105 hover:text-my-darkerGreen transition'
			>
				{user.fullName}
			</Link>
			<div className='flex gap-2 justify-evenly'>
				{/* Товарные направления */}
				<div>
					<h4 className='underline my-3 text-lg'>Товарные направления</h4>
					{user.TN.map(tn => (
						<Link
							href={`/settings/TN/${tn.number}`}
							key={tn.number}
							className='block p-1'
						>
							{tn.name}
						</Link>
					))}
				</div>
				{/* Права */}
				<div className='justify-around'>
					<h4 className='underline text-lg my-3'>Права</h4>
					<div className='flex gap-2 justify-around'>
						{/* Доступные права */}
						<div>
							<h3 className=''>Доступные права</h3>
							<div className='flex justify-around'>
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
							<h3>Нет прав</h3>
							<div>
								{/* Здесь будет список недоступных прав с возможностью их добавить */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
