import { UserType } from 'utils/types'
import Link from 'next/link'

export default function User({ user }: { user: UserType }) {
	const deleteRight = (e: React.MouseEvent) => {
		console.log('right deleted / User List')
		// TODO delete rights
	}

	return (
		<div className='border-2 border-cyan-400 max-w-screen-sm m-3 p-2 text-center mx-auto'>
			<Link href={`/users/${user.fullName}`} className='text-lg'>
				{user.fullName}
			</Link>
			<div className='flex gap-2 justify-center'>
				{/* Товарные направления */}
				<div className='text-center p-3'>
					<h4 className='underline'>Товарные направления:</h4>
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
					<h4 className='underline'>Права:</h4>
					<div className='flex gap-2 justify-center'>
						{/* Доступные права */}
						<h3 className=''>Доступные права</h3>
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
