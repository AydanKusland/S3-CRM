'use client'

// get current user
import tovarnieNapravlenia from 'utils/tovarnieNapravlenia'

const currentUser = {
	tovarnieNapravlenia: ['10 Источники света', '15 Фонари', '17 Звонки']
}

function page() {
	const deleteTovarnoeNapravlenie = (e: React.MouseEvent) => {}
	const addTovarnoeNapravlenie = (e: React.ChangeEvent) => {}
	return (
		<div className='p-4'>
			<div>
				<h3>{'Мои товарные направления'}</h3>
				<div>
					{currentUser.tovarnieNapravlenia.map(napravlenie => {
						return (
							<div key={napravlenie} className='flex gap-1'>
								<p>{napravlenie}</p>
								<button onClick={deleteTovarnoeNapravlenie}>delete</button>
							</div>
						)
					})}
				</div>
				<div className='flex gap-2'>
					<h3>{'Добавить товарное направление'}</h3>
					<select
						name='tovarnoeNapravlenie'
						id='tovarnoeNapravlenie'
						onChange={addTovarnoeNapravlenie}
					>
						{tovarnieNapravlenia.map(napravlenie => {
							return <option key={napravlenie}>{napravlenie}</option>
						})}
					</select>
				</div>
			</div>
			<div>
				<h3>{'Мои заводы'}</h3>
			</div>
		</div>
	)
}

export default page
