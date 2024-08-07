import React from 'react'

const inspectors = [
	'Любой',
	'Любой инженер',
	'Пронин',
	'Волколупов',
	'Соловьёв'
]

export const InspectorsInput = ({ inspector }: { inspector?: string }) => {
	return (
		<>
			<input
				required
				className='rounded-l-none max-w-40'
				list='recommendedExecutors'
				name='recommendedExecutor'
				autoComplete='on'
				placeholder='исполнитель'
				defaultValue={inspector}
			/>
			<datalist id='recommendedExecutors'>
				{inspectors.map(option => (
					<option key={option} value={option} />
				))}
			</datalist>
		</>
	)
}
