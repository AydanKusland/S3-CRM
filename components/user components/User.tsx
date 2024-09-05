import { UserType } from 'utils/types'
import Link from 'next/link'

export default function User({ user }: { user: UserType }) {
	const deleteRight = (e: React.MouseEvent) => {
		console.log('right deleted / User List')
		// TODO delete rights
	}

	return (
		<div className='w-11/12 border-2 border-cyan-600 max-w-screen-md p-3 text-center mx-auto'>
			<Link href={`/users/${user.fullName}`} className='block text-xl my-2'>
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
